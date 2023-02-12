import { log, ByteArray, BigInt, Address, crypto, store } from "@graphprotocol/graph-ts"
import {
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
} from "../generated/templates/Traits/Traits"
import {
  Trait, TraitType, TraitBalance, User
} from "../generated/schema"
import { ADDRESS_ZERO } from "./constants";
import { concat2, concat3 } from "./helpers";

export function handleTransferSingle(event: TransferSingleEvent): void {
  let receiver = User.load(event.params.to.toHexString());
  if (!receiver) {
    receiver = new User(event.params.to.toHexString());
    receiver.save();
  }

  let sender = User.load(event.params.from.toHexString());
  if (!sender) {
    sender = new User(event.params.from.toHexString());
    sender.save();
  }

  if (receiver.id != ADDRESS_ZERO) {
    let receiverTraitBalance = TraitBalance.load(concat3(event.address.toHexString(), event.params.id.toString(), receiver.id));
    if (!receiverTraitBalance) {
      receiverTraitBalance = new TraitBalance(concat3(event.address.toHexString(), event.params.id.toString(), receiver.id));
      receiverTraitBalance.trait = concat2(event.address.toHexString(), event.params.id.toString());
      receiverTraitBalance.owner = receiver.id;
      receiverTraitBalance.amount = event.params.value;
      receiverTraitBalance.save();
    } else {
      receiverTraitBalance.amount = receiverTraitBalance.amount.plus(event.params.value);
      receiverTraitBalance.save();
    }
  }

  if (sender.id != ADDRESS_ZERO) {
    let senderTraitBalance = TraitBalance.load(concat3(event.address.toHexString(), event.params.id.toString(), sender.id));
    if (!senderTraitBalance) {
      senderTraitBalance = new TraitBalance(concat3(event.address.toHexString(), event.params.id.toString(), sender.id));
      senderTraitBalance.trait = concat2(event.address.toHexString(), event.params.id.toString());
      senderTraitBalance.owner = sender.id;
      senderTraitBalance.amount = BigInt.fromString("0");
      senderTraitBalance.save();
    } else {
      senderTraitBalance.amount = senderTraitBalance.amount.minus(event.params.value);
      senderTraitBalance.save();
    }
  }
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let receiver = User.load(event.params.to.toHexString());
  if (!receiver) {
    receiver = new User(event.params.to.toHexString());
    receiver.save();
  }

  let sender = User.load(event.params.from.toHexString());
  if (!sender) {
    sender = new User(event.params.from.toHexString());
    sender.save();
  }

  const transferCount = event.params.ids.length;
  for (let i = 0; i < transferCount; i++) {
    if(receiver.id != ADDRESS_ZERO) {
      let receiverTraitBalance = TraitBalance.load(concat3(event.address.toHexString(), event.params.ids[i].toString(), receiver.id));
      if (!receiverTraitBalance) {
        receiverTraitBalance = new TraitBalance(concat3(event.address.toHexString(), event.params.ids[i].toString(), receiver.id));
        receiverTraitBalance.trait = concat2(event.address.toHexString(), event.params.ids[i].toString());
        receiverTraitBalance.owner = receiver.id;
        receiverTraitBalance.amount = event.params.values[i];
        receiverTraitBalance.save();
      } else {
        receiverTraitBalance.amount = receiverTraitBalance.amount.plus(event.params.values[i]);
        receiverTraitBalance.save();
      }
    }

    if(sender.id != ADDRESS_ZERO) {
      let senderTraitBalance = TraitBalance.load(concat3(event.address.toHexString(), event.params.ids[i].toString(), sender.id));
      if (!senderTraitBalance) {
        senderTraitBalance = new TraitBalance(concat3(event.address.toHexString(), event.params.ids[i].toString(), sender.id));
        senderTraitBalance.trait = concat2(event.address.toHexString(), event.params.ids[i].toString());
        senderTraitBalance.owner = sender.id;
        senderTraitBalance.amount = BigInt.fromString("0");
        senderTraitBalance.save();
      } else {
        senderTraitBalance.amount = senderTraitBalance.amount.minus(event.params.values[i]);
        senderTraitBalance.save();
      }
    }
  }
}