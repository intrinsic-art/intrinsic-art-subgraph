import {
  ArtworkMinted as ArtworkMintedEvent,
  TraitsReclaimed as TraitsReclaimedEvent,
  Transfer as TransferEvent,
  WhitelistUpdated as WhitelistUpdatedEvent,
  WhitelistArtworkMinted as WhitelistArtworkMintedEvent,
  ProofArtworkMinted as ProofArtworkMintedEvent,
} from "../generated/templates/Artwork/Artwork"
import { Artwork as ArtworkContractTemplate } from "../generated/templates/Artwork/Artwork"
import {
  Artwork, User, Project, ArtworkContract, TraitsContract, WhitelistBalance
} from "../generated/schema"
import { concat2 } from "./helpers";
import { BigInt } from '@graphprotocol/graph-ts'

export function handleArtworkMinted(event: ArtworkMintedEvent): void {
  let artwork = new Artwork(concat2(event.address.toHexString(), event.params.artworkTokenId.toString()));
  artwork.artworkContract = event.address.toHexString();
  artwork.tokenId = event.params.artworkTokenId;
  artwork.owner = event.params.creator.toHexString();
  artwork.creator = event.params.creator.toHexString();
  artwork.hash = event.params.hash.toHexString();
  artwork.createdTimestamp = event.block.timestamp.toI32();
  artwork.traitsReclaimed = false;
  
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

export function handleTraitsReclaimed(event: TraitsReclaimedEvent): void {
  let artwork = Artwork.load(concat2(event.address.toHexString(), event.params.artworkTokenId.toString()));
  if(!artwork) return;
  artwork.traitsReclaimed = true;
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


export function handleWhitelistUpdated(event: WhitelistUpdatedEvent): void {
  let traitsContract = TraitsContract.load(event.address.toHexString());
  if (!traitsContract) return;

  let project = Project.load(traitsContract.project);
  if (!project) return;

  const whitelistLength = event.params.whitelistAddresses.length;

  for (let i = 0; i < whitelistLength; i++) {
    let whitelistUser = User.load(event.params.whitelistAddresses[i].toHexString());

    if (!whitelistUser) {
      whitelistUser = new User(event.params.whitelistAddresses[i].toHexString());
    }

    let whitelistBalance = WhitelistBalance.load(concat2(event.address.toHexString(), whitelistUser.id));

    if(!whitelistBalance) {
      whitelistBalance = new WhitelistBalance(concat2(event.address.toHexString(), whitelistUser.id));
      whitelistBalance.owner = whitelistUser.id;
    }

    whitelistBalance.amount = event.params.whitelistAmounts[i];
    whitelistBalance.project = project.id;

    whitelistUser.save();
    whitelistBalance.save();
  }
}

export function handleWhitelistArtworkMinted(event: WhitelistArtworkMintedEvent): void {
  let whitelistUser = User.load(event.params.caller.toHexString());

  if (!whitelistUser) {
    whitelistUser = new User(event.params.caller.toHexString());
  }

  let whitelistBalance = WhitelistBalance.load(concat2(event.address.toHexString(), whitelistUser.id));

  if(!whitelistBalance) {
    whitelistBalance = new WhitelistBalance(concat2(event.address.toHexString(), whitelistUser.id));
    whitelistBalance.owner = whitelistUser.id;
  }

  whitelistBalance.amount = whitelistBalance.amount.minus(BigInt.fromString("1"));

  whitelistUser.save();
  whitelistBalance.save();
}

export function handleProofArtworkMinted(event: ProofArtworkMintedEvent): void {
  let traitsContract = TraitsContract.load(event.address.toHexString());
  if (!traitsContract) return;

  let project = Project.load(traitsContract.project);
  if (!project) return;

  project.proofMinted = true;

  project.save();
}
