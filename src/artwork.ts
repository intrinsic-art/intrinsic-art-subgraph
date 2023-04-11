import {
  ArtworkCreated as ArtworkCreatedEvent,
  ArtworkDecomposed as ArtworkDecomposedEvent,
  Transfer as TransferEvent,
} from "../generated/templates/Artwork/Artwork"
import { Artwork as ArtworkContractTemplate } from "../generated/templates/Artwork/Artwork"
import {
  Artwork, User, Project, ArtworkContract
} from "../generated/schema"
import { concat2, concat3 } from "./helpers";
import { BigInt } from '@graphprotocol/graph-ts'

export function handleArtworkCreated(event: ArtworkCreatedEvent): void {
  let artwork = new Artwork(concat2(event.address.toHexString(), event.params.artworkTokenId.toString()));
  artwork.artworkContract = event.address.toHexString();
  artwork.tokenId = event.params.artworkTokenId;
  artwork.owner = event.params.creator.toHexString();
  artwork.creator = event.params.creator.toHexString();
  artwork.hash = event.params.hash.toHexString();
  artwork.createdTimestamp = event.block.timestamp.toI32();
  artwork.decomposed = false;
  
  let artworkContract = ArtworkContract.load(event.address.toHexString());
  if(!!artworkContract) {
    let traitsContractAddress = artworkContract.traitsContract;
    const traitCount = event.params.traitTokenIds.length;
    let traitIds: string[] = [];
    for(let i=0; i < traitCount; i++) {
      traitIds.push(concat2(traitsContractAddress, event.params.traitTokenIds[i].toString()));
    }
    artwork.traits = traitIds;
    artwork.save();

    let _artworkContract = ArtworkContractTemplate.bind(event.address);
    let project = Project.load(artworkContract.project);
    if(!!project) {
      project.totalSupply = project.totalSupply.plus(BigInt.fromI32(1));
      project.nextTokenId = _artworkContract.nextTokenId();
      project.save();
    }
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

  let artworkContract = ArtworkContract.load(event.address.toHexString());
  if(!artworkContract) return;
  let project = Project.load(artworkContract.project);
  if(!project) return;
  project.totalSupply = project.totalSupply.minus(BigInt.fromI32(1));
  project.save();
}

export function handleTransfer(event: TransferEvent): void {
  let artwork = Artwork.load(concat2(event.address.toHexString(), event.params.tokenId.toString()));
  if(!artwork) return;
  artwork.owner = event.params.to.toHexString();
  artwork.save();
}
