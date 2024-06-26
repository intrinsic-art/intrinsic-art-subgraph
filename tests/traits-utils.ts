import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  TraitCreated,
  TraitsAndTypesCreated,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/Traits/Traits"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createTraitCreatedEvent(
  studio: Address,
  name: string,
  value: string
): TraitCreated {
  let traitCreatedEvent = changetype<TraitCreated>(newMockEvent())

  traitCreatedEvent.parameters = new Array()

  traitCreatedEvent.parameters.push(
    new ethereum.EventParam("studio", ethereum.Value.fromAddress(studio))
  )
  traitCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  traitCreatedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )

  return traitCreatedEvent
}

export function createTraitsAndTypesCreatedEvent(
  traitTypeNames: Array<string>,
  traitTypeValues: Array<string>,
  traitNames: Array<string>,
  traitValues: Array<string>,
  traitTypeIndexes: Array<BigInt>,
  traitMaxSupplys: Array<BigInt>
): TraitsAndTypesCreated {
  let traitsAndTypesCreatedEvent = changetype<TraitsAndTypesCreated>(
    newMockEvent()
  )

  traitsAndTypesCreatedEvent.parameters = new Array()

  traitsAndTypesCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "traitTypeNames",
      ethereum.Value.fromStringArray(traitTypeNames)
    )
  )
  traitsAndTypesCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "traitTypeValues",
      ethereum.Value.fromStringArray(traitTypeValues)
    )
  )
  traitsAndTypesCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "traitNames",
      ethereum.Value.fromStringArray(traitNames)
    )
  )
  traitsAndTypesCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "traitValues",
      ethereum.Value.fromStringArray(traitValues)
    )
  )
  traitsAndTypesCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "traitTypeIndexes",
      ethereum.Value.fromUnsignedBigIntArray(traitTypeIndexes)
    )
  )
  traitsAndTypesCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "traitMaxSupplys",
      ethereum.Value.fromUnsignedBigIntArray(traitMaxSupplys)
    )
  )

  return traitsAndTypesCreatedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}
