import { log, ByteArray, BigInt, Address, crypto, store } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll as ApprovalForAllEvent,
  TraitCreated as TraitCreatedEvent,
  TraitsAndTypesCreated as TraitsAndTypesCreatedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent
} from "../generated/Traits/Traits"
import {
  Trait
} from "../generated/schema"

export function handleTraitsAndTypesCreated(event: TraitsAndTypesCreatedEvent): void {
  const traitCount = event.params.traitNames.length;
  for(let i = 0; i < traitCount; i++) {
    let trait = new Trait(i.toString());
    trait.tokenId = BigInt.fromString(i.toString());
    trait.name = event.params.traitNames[i];
    trait.value = event.params.traitValues[i];
    trait.traitTypeIndex = event.params.traitTypeIndexes[i];
    trait.save();
  };
}