import {
  ProjectCreated as ProjectCreatedEvent,
  ArtworkCreated as ArtworkCreatedEvent,
  ArtworkDecomposed as ArtworkDecomposedEvent,
  Transfer as TransferEvent,
  Studio as StudioContract
} from "../generated/Studio/Studio"

import {
  Artwork, User, Project
} from "../generated/schema"

export function handleCreateProject(event: ProjectCreatedEvent): void {
  let project = new Project("0");
  project.baseURI = event.params.baseURI;
  project.artistAddress = event.params.artistAddress.toHexString();
  project.maxSupply = event.params.maxSupply;
  project.metadata = event.params.metadata;

  let studioContract = StudioContract.bind(event.address);
  project.name = studioContract.name();
  project.symbol = studioContract.symbol();

  project.save();
}

export function handleArtworkCreated(event: ArtworkCreatedEvent): void {
  let artwork = new Artwork(event.params.artworkTokenId.toString());
  artwork.tokenId = event.params.artworkTokenId;
  artwork.owner = event.params.creator.toHexString();
  artwork.creator = event.params.creator.toHexString();
  artwork.decomposed = false;
  // artwork.traits = event.params.traitTokenIds.map(traitTokenId => traitTokenId.toString());
  const traitCount = event.params.traitTokenIds.length;
  let traitTokenIds: string[] = [];
  for(let i=0; i < traitCount; i++) {
    traitTokenIds.push(event.params.traitTokenIds[i].toString());
  }
  artwork.traits = traitTokenIds;
  artwork.save();

  let user = User.load(event.params.creator.toHexString());
  if(!user) {
    user = new User(event.params.creator.toHexString());
    user.save();
  }
}

export function handleArtworkDecomposed(event: ArtworkDecomposedEvent): void {
  let artwork = Artwork.load(event.params.artworkTokenId.toString());
  if(!artwork) return;
  artwork.decomposed = true;
  artwork.save();
}

export function handleTransfer(event: TransferEvent): void {
  let artwork = Artwork.load(event.params.tokenId.toString());
  if(!artwork) return;
  artwork.owner = event.params.to.toString();
  artwork.save();
}
