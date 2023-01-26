import { BigInt } from "@graphprotocol/graph-ts"
import {
  Studio,
  Approval,
  ApprovalForAll,
  ArtistRevenueClaimed,
  ArtworkCreated,
  ArtworkDecomposed,
  AuctionScheduled,
  OwnershipTransferred,
  PlatformRevenueClaimed,
  TraitsBought,
  Transfer
} from "../generated/Studio/Studio"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from)

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.approved = event.params.approved

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.FEE_DENOMINATOR(...)
  // - contract.artistAddress(...)
  // - contract.artistClaimableRevenues(...)
  // - contract.artworkData(...)
  // - contract.auctionEndPrice(...)
  // - contract.auctionEndTime(...)
  // - contract.auctionPlatformFeeNumerator(...)
  // - contract.auctionStartPrice(...)
  // - contract.auctionStartTime(...)
  // - contract.balanceOf(...)
  // - contract.baseURI(...)
  // - contract.createArtwork(...)
  // - contract.getApproved(...)
  // - contract.getArtworkHash(...)
  // - contract.getArtworkTraits(...)
  // - contract.getArtworkURI(...)
  // - contract.getIsAdmin(...)
  // - contract.getProjectArtist(...)
  // - contract.getProjectIsLocked(...)
  // - contract.getProjectMetadata(...)
  // - contract.getProjectScriptCount(...)
  // - contract.getProjectScripts(...)
  // - contract.getTraitAuctionPrice(...)
  // - contract.getTraits(...)
  // - contract.isApprovedForAll(...)
  // - contract.locked(...)
  // - contract.metadata(...)
  // - contract.name(...)
  // - contract.onERC1155BatchReceived(...)
  // - contract.onERC1155Received(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.platformClaimableRevenues(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
  // - contract.traits(...)
  // - contract.userNonces(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleArtistRevenueClaimed(event: ArtistRevenueClaimed): void {}

export function handleArtworkCreated(event: ArtworkCreated): void {}

export function handleArtworkDecomposed(event: ArtworkDecomposed): void {}

export function handleAuctionScheduled(event: AuctionScheduled): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePlatformRevenueClaimed(
  event: PlatformRevenueClaimed
): void {}

export function handleTraitsBought(event: TraitsBought): void {}

export function handleTransfer(event: Transfer): void {}
