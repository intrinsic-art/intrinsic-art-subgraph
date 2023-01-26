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

export function handleStudioArtworkCreated(event: StudioArtworkCreatedEvent): void {
  let artwork = new Artwork(event.params.artworkTokenId.toString());
  artwork.tokenId = event.params.artworkTokenId;
  artwork.creator = event.params.creator.toString();
  artwork.owner = event.params.creator.toString();
  artwork.decomposed = false;
  artwork.save();
}

export function handleStudioArtworkDecomposed(event: StudioArtworkDecomposedEvent): void {
  let artwork = Artwork.load(event.params.artworkTokenId.toString());
  if(!artwork) return;
  artwork.decomposed = true;
  artwork.save();
}

export function handleStudioTransfer(event: StudioTransferEvent): void {
  let artwork = Artwork.load(event.params.tokenId.toString());
  if(!artwork) return;
  artwork.owner = event.params.to.toString();
}
