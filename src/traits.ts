import { log, ByteArray, BigInt, Address, crypto, store } from "@graphprotocol/graph-ts"
import {
  TraitCreated as TraitCreatedEvent,
  TraitsAndTypesCreated as TraitsAndTypesCreatedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent
} from "../generated/Traits/Traits"
import {
  Trait, TraitType
} from "../generated/schema"

export function handleTraitsAndTypesCreated(event: TraitsAndTypesCreatedEvent): void {
  const traitCount = event.params.traitNames.length;
  for (let i = 0; i < traitCount; i++) {
    // todo: Update tokenIds to get from array once new contracts deployed
    let trait = new Trait((i+1).toString());
    trait.tokenId = BigInt.fromString((i+1).toString());
    trait.name = event.params.traitNames[i];
    trait.value = event.params.traitValues[i];
    trait.maxSupply = event.params.traitMaxSupplys[i];
    trait.totalSupply = BigInt.fromString("0");
    trait.traitType = event.params.traitTypeIndexes[i].toString();
    trait.save();
  };

  const traitTypeCount = event.params.traitTypeNames.length;
  for (let i = 0; i < traitTypeCount; i++) {
    let traitType = new TraitType(i.toString());
    traitType.name = event.params.traitTypeNames[i];
    traitType.value = event.params.traitTypeValues[i];
    traitType.save();
  }
}