import {
  StudioApproval as StudioApprovalEvent,
  StudioApprovalForAll as StudioApprovalForAllEvent,
  StudioArtistRevenueClaimed as StudioArtistRevenueClaimedEvent,
  StudioArtworkCreated as StudioArtworkCreatedEvent,
  StudioArtworkDecomposed as StudioArtworkDecomposedEvent,
  StudioAuctionScheduled as StudioAuctionScheduledEvent,
  StudioOwnershipTransferred as StudioOwnershipTransferredEvent,
  StudioPlatformRevenueClaimed as StudioPlatformRevenueClaimedEvent,
  StudioProjectCreated as StudioProjectCreatedEvent,
  StudioTraitsBought as StudioTraitsBoughtEvent,
  StudioTransfer as StudioTransferEvent
} from "../generated/Studio/Studio"

import {
  Artwork, User
} from "../generated/schema"

export function handleStudioTransfer(event: StudioTransferEvent): void {
  // let entity = new StudioTransfer(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.from = event.params.from
  // entity.to = event.params.to
  // entity.tokenId = event.params.tokenId

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}
