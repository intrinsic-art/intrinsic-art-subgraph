import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  ArtistRevenueClaimed,
  ArtworkCreated,
  ArtworkDecomposed,
  AuctionScheduled,
  OwnershipTransferred,
  PlatformRevenueClaimed,
  ProjectCreated,
  TraitsBought,
  Transfer
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createArtistRevenueClaimedEvent(
  claimedRevenue: BigInt
): ArtistRevenueClaimed {
  let artistRevenueClaimedEvent = changetype<ArtistRevenueClaimed>(
    newMockEvent()
  )

  artistRevenueClaimedEvent.parameters = new Array()

  artistRevenueClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimedRevenue",
      ethereum.Value.fromUnsignedBigInt(claimedRevenue)
    )
  )

  return artistRevenueClaimedEvent
}

export function createArtworkCreatedEvent(
  artworkTokenId: BigInt,
  traitTokenIds: Array<BigInt>,
  hash: Bytes,
  creator: Address
): ArtworkCreated {
  let artworkCreatedEvent = changetype<ArtworkCreated>(newMockEvent())

  artworkCreatedEvent.parameters = new Array()

  artworkCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "artworkTokenId",
      ethereum.Value.fromUnsignedBigInt(artworkTokenId)
    )
  )
  artworkCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "traitTokenIds",
      ethereum.Value.fromUnsignedBigIntArray(traitTokenIds)
    )
  )
  artworkCreatedEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromFixedBytes(hash))
  )
  artworkCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return artworkCreatedEvent
}

export function createArtworkDecomposedEvent(
  artworkTokenId: BigInt,
  caller: Address
): ArtworkDecomposed {
  let artworkDecomposedEvent = changetype<ArtworkDecomposed>(newMockEvent())

  artworkDecomposedEvent.parameters = new Array()

  artworkDecomposedEvent.parameters.push(
    new ethereum.EventParam(
      "artworkTokenId",
      ethereum.Value.fromUnsignedBigInt(artworkTokenId)
    )
  )
  artworkDecomposedEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return artworkDecomposedEvent
}

export function createAuctionScheduledEvent(
  auctionStartTime: BigInt,
  auctionEndTime: BigInt,
  auctionStartPrice: BigInt,
  auctionEndPrice: BigInt
): AuctionScheduled {
  let auctionScheduledEvent = changetype<AuctionScheduled>(newMockEvent())

  auctionScheduledEvent.parameters = new Array()

  auctionScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionStartTime",
      ethereum.Value.fromUnsignedBigInt(auctionStartTime)
    )
  )
  auctionScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionEndTime",
      ethereum.Value.fromUnsignedBigInt(auctionEndTime)
    )
  )
  auctionScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionStartPrice",
      ethereum.Value.fromUnsignedBigInt(auctionStartPrice)
    )
  )
  auctionScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionEndPrice",
      ethereum.Value.fromUnsignedBigInt(auctionEndPrice)
    )
  )

  return auctionScheduledEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPlatformRevenueClaimedEvent(
  claimedRevenue: BigInt
): PlatformRevenueClaimed {
  let platformRevenueClaimedEvent = changetype<PlatformRevenueClaimed>(
    newMockEvent()
  )

  platformRevenueClaimedEvent.parameters = new Array()

  platformRevenueClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimedRevenue",
      ethereum.Value.fromUnsignedBigInt(claimedRevenue)
    )
  )

  return platformRevenueClaimedEvent
}

export function createProjectCreatedEvent(
  baseURI: string,
  artistAddress: Address,
  maxSupply: BigInt,
  metadata: string
): ProjectCreated {
  let projectCreatedEvent = changetype<ProjectCreated>(newMockEvent())

  projectCreatedEvent.parameters = new Array()

  projectCreatedEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "artistAddress",
      ethereum.Value.fromAddress(artistAddress)
    )
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxSupply",
      ethereum.Value.fromUnsignedBigInt(maxSupply)
    )
  )
  projectCreatedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromString(metadata))
  )

  return projectCreatedEvent
}

export function createTraitsBoughtEvent(
  buyer: Address,
  traitTokenIds: Array<BigInt>,
  traitQuantities: Array<BigInt>
): TraitsBought {
  let traitsBoughtEvent = changetype<TraitsBought>(newMockEvent())

  traitsBoughtEvent.parameters = new Array()

  traitsBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  traitsBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "traitTokenIds",
      ethereum.Value.fromUnsignedBigIntArray(traitTokenIds)
    )
  )
  traitsBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "traitQuantities",
      ethereum.Value.fromUnsignedBigIntArray(traitQuantities)
    )
  )

  return traitsBoughtEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
