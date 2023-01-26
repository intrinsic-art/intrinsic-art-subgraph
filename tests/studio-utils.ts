import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  StudioApproval,
  StudioApprovalForAll,
  StudioArtistRevenueClaimed,
  StudioArtworkCreated,
  StudioArtworkDecomposed,
  StudioAuctionScheduled,
  StudioOwnershipTransferred,
  StudioPlatformRevenueClaimed,
  StudioProjectCreated,
  StudioTraitsBought,
  StudioTransfer
} from "../generated/Studio/Studio"

export function createStudioApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): StudioApproval {
  let studioApprovalEvent = changetype<StudioApproval>(newMockEvent())

  studioApprovalEvent.parameters = new Array()

  studioApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  studioApprovalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  studioApprovalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return studioApprovalEvent
}

export function createStudioApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): StudioApprovalForAll {
  let studioApprovalForAllEvent = changetype<StudioApprovalForAll>(
    newMockEvent()
  )

  studioApprovalForAllEvent.parameters = new Array()

  studioApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  studioApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  studioApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return studioApprovalForAllEvent
}

export function createStudioArtistRevenueClaimedEvent(
  claimedRevenue: BigInt
): StudioArtistRevenueClaimed {
  let studioArtistRevenueClaimedEvent = changetype<StudioArtistRevenueClaimed>(
    newMockEvent()
  )

  studioArtistRevenueClaimedEvent.parameters = new Array()

  studioArtistRevenueClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimedRevenue",
      ethereum.Value.fromUnsignedBigInt(claimedRevenue)
    )
  )

  return studioArtistRevenueClaimedEvent
}

export function createStudioArtworkCreatedEvent(
  artworkTokenId: BigInt,
  traitTokenIds: Array<BigInt>,
  hash: Bytes,
  creator: Address
): StudioArtworkCreated {
  let studioArtworkCreatedEvent = changetype<StudioArtworkCreated>(
    newMockEvent()
  )

  studioArtworkCreatedEvent.parameters = new Array()

  studioArtworkCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "artworkTokenId",
      ethereum.Value.fromUnsignedBigInt(artworkTokenId)
    )
  )
  studioArtworkCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "traitTokenIds",
      ethereum.Value.fromUnsignedBigIntArray(traitTokenIds)
    )
  )
  studioArtworkCreatedEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromFixedBytes(hash))
  )
  studioArtworkCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return studioArtworkCreatedEvent
}

export function createStudioArtworkDecomposedEvent(
  artworkTokenId: BigInt,
  caller: Address
): StudioArtworkDecomposed {
  let studioArtworkDecomposedEvent = changetype<StudioArtworkDecomposed>(
    newMockEvent()
  )

  studioArtworkDecomposedEvent.parameters = new Array()

  studioArtworkDecomposedEvent.parameters.push(
    new ethereum.EventParam(
      "artworkTokenId",
      ethereum.Value.fromUnsignedBigInt(artworkTokenId)
    )
  )
  studioArtworkDecomposedEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return studioArtworkDecomposedEvent
}

export function createStudioAuctionScheduledEvent(
  auctionStartTime: BigInt,
  auctionEndTime: BigInt,
  auctionStartPrice: BigInt,
  auctionEndPrice: BigInt
): StudioAuctionScheduled {
  let studioAuctionScheduledEvent = changetype<StudioAuctionScheduled>(
    newMockEvent()
  )

  studioAuctionScheduledEvent.parameters = new Array()

  studioAuctionScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionStartTime",
      ethereum.Value.fromUnsignedBigInt(auctionStartTime)
    )
  )
  studioAuctionScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionEndTime",
      ethereum.Value.fromUnsignedBigInt(auctionEndTime)
    )
  )
  studioAuctionScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionStartPrice",
      ethereum.Value.fromUnsignedBigInt(auctionStartPrice)
    )
  )
  studioAuctionScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionEndPrice",
      ethereum.Value.fromUnsignedBigInt(auctionEndPrice)
    )
  )

  return studioAuctionScheduledEvent
}

export function createStudioOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): StudioOwnershipTransferred {
  let studioOwnershipTransferredEvent = changetype<StudioOwnershipTransferred>(
    newMockEvent()
  )

  studioOwnershipTransferredEvent.parameters = new Array()

  studioOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  studioOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return studioOwnershipTransferredEvent
}

export function createStudioPlatformRevenueClaimedEvent(
  claimedRevenue: BigInt
): StudioPlatformRevenueClaimed {
  let studioPlatformRevenueClaimedEvent = changetype<
    StudioPlatformRevenueClaimed
  >(newMockEvent())

  studioPlatformRevenueClaimedEvent.parameters = new Array()

  studioPlatformRevenueClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "claimedRevenue",
      ethereum.Value.fromUnsignedBigInt(claimedRevenue)
    )
  )

  return studioPlatformRevenueClaimedEvent
}

export function createStudioProjectCreatedEvent(
  baseURI: string,
  artistAddress: Address,
  maxSupply: BigInt,
  metadata: string
): StudioProjectCreated {
  let studioProjectCreatedEvent = changetype<StudioProjectCreated>(
    newMockEvent()
  )

  studioProjectCreatedEvent.parameters = new Array()

  studioProjectCreatedEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )
  studioProjectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "artistAddress",
      ethereum.Value.fromAddress(artistAddress)
    )
  )
  studioProjectCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxSupply",
      ethereum.Value.fromUnsignedBigInt(maxSupply)
    )
  )
  studioProjectCreatedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromString(metadata))
  )

  return studioProjectCreatedEvent
}

export function createStudioTraitsBoughtEvent(
  buyer: Address,
  traitTokenIds: Array<BigInt>,
  traitQuantities: Array<BigInt>
): StudioTraitsBought {
  let studioTraitsBoughtEvent = changetype<StudioTraitsBought>(newMockEvent())

  studioTraitsBoughtEvent.parameters = new Array()

  studioTraitsBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  studioTraitsBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "traitTokenIds",
      ethereum.Value.fromUnsignedBigIntArray(traitTokenIds)
    )
  )
  studioTraitsBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "traitQuantities",
      ethereum.Value.fromUnsignedBigIntArray(traitQuantities)
    )
  )

  return studioTraitsBoughtEvent
}

export function createStudioTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): StudioTransfer {
  let studioTransferEvent = changetype<StudioTransfer>(newMockEvent())

  studioTransferEvent.parameters = new Array()

  studioTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  studioTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  studioTransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return studioTransferEvent
}
