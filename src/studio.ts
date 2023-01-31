import {
  ProjectCreated as ProjectCreatedEvent,
  ArtworkCreated as ArtworkCreatedEvent,
  ArtworkDecomposed as ArtworkDecomposedEvent,
  Transfer as TransferEvent,
} from "../generated/Studio/Studio"

import {
  Artwork, User, Project, StudioContract
} from "../generated/schema"

import { concat2, concat3 } from "./helpers";

export function handleArtworkCreated(event: ArtworkCreatedEvent): void {
  let artwork = new Artwork(concat2(event.address.toHexString(), event.params.artworkTokenId.toString()));
  artwork.studioContract = event.address.toHexString();
  artwork.tokenId = event.params.artworkTokenId;
  artwork.owner = event.params.creator.toHexString();
  artwork.creator = event.params.creator.toHexString();
  artwork.decomposed = false;
  // artwork.traits = event.params.traitTokenIds.map(traitTokenId => traitTokenId.toString());
  
  let studioContract = StudioContract.load(event.address.toHexString());
  if(!!studioContract) {
    let traitsContractAddress = studioContract.traitsContract
      const traitCount = event.params.traitTokenIds.length;
      let traitIds: string[] = [];
      for(let i=0; i < traitCount; i++) {
        traitIds.push(concat2(traitsContractAddress, event.params.traitTokenIds[i].toString()));
      }
      artwork.traits = traitIds;
      artwork.save();
  }

  let user = User.load(event.params.creator.toHexString());
  if(!user) {
    user = new User(event.params.creator.toHexString());
    user.save();
  }
}

export function handleArtworkDecomposed(event: ArtworkDecomposedEvent): void {
  let artwork = Artwork.load(concat2(event.address.toHexString(), event.params.artworkTokenId.toString()));
  if(!artwork) return;
  artwork.decomposed = true;
  artwork.save();
}

export function handleTransfer(event: TransferEvent): void {
  let artwork = Artwork.load(concat2(event.address.toHexString(), event.params.tokenId.toString()));
  if(!artwork) return;
  artwork.owner = event.params.to.toString();
  artwork.save();
}
