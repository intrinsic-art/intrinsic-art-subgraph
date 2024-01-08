import { log, ByteArray, BigInt, Address, crypto, store } from "@graphprotocol/graph-ts"
import {
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  WhitelistUpdated as WhitelistUpdatedEvent,
  WhitelistArtworkMint as WhitelistArtworkMintEvent,
} from "../generated/templates/Traits/Traits"
import {
  Trait, TraitBalance, User, WhitelistBalance
} from "../generated/schema"
import { ADDRESS_ZERO } from "./constants";
import { concat2, concat3 } from "./helpers";
import { Traits as _TraitsContract } from "../generated/templates/Traits/Traits"

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
  if (sender.id == ADDRESS_ZERO) {
    // These traits were minted
    let _traitsContract = _TraitsContract.bind(event.address);
    for (let i = 0; i < transferCount; i++) {
    let trait = Trait.load(concat2(event.address.toHexString(), event.params.ids[i].toString()));
    if (trait) {
      trait.totalSupply = _traitsContract.totalSupply(event.params.ids[i]);
      trait.save();
    }
    }
  }


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

export function handleWhitelistUpdated(event: WhitelistUpdatedEvent): void {
  const whitelistLength = event.params.whitelistAddresses.length;

  for (let i = 0; i < whitelistLength; i++) {
    let whitelistUser = User.load(event.params.whitelistAddresses[i].toHexString());

    if (!whitelistUser) {
      whitelistUser = new User(event.params.whitelistAddresses[i].toHexString());
    }

    let whitelistBalance = WhitelistBalance.load(concat2(event.address.toHexString(), whitelistUser.id));

    if(!whitelistBalance) {
      whitelistBalance = new WhitelistBalance(concat2(event.address.toHexString(), whitelistUser.id));
      whitelistBalance.owner = whitelistUser.id;
    }

    whitelistBalance.amount = event.params.whitelistAmounts[i];

    whitelistUser.save();
    whitelistBalance.save();
  }
}

export function handleWhitelistArtworkMint(event: WhitelistArtworkMintEvent): void {
  let whitelistUser = User.load(event.params.caller.toHexString());

  if (!whitelistUser) {
    whitelistUser = new User(event.params.caller.toHexString());
  }

  let whitelistBalance = WhitelistBalance.load(concat2(event.address.toHexString(), whitelistUser.id));

  if(!whitelistBalance) {
    whitelistBalance = new WhitelistBalance(concat2(event.address.toHexString(), whitelistUser.id));
    whitelistBalance.owner = whitelistUser.id;
  }

  whitelistBalance.amount = whitelistBalance.amount.minus(BigInt.fromString("1"));

  whitelistUser.save();
  whitelistBalance.save();
}