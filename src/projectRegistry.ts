import { log, ByteArray, BigInt, Address, crypto, store } from "@graphprotocol/graph-ts"
import {
  ProjectRegistered as ProjectRegisteredEvent,
} from "../generated/ProjectRegsitry/ProjectRegistry"
import {
  Project, ArtworkContract, Trait, TraitsContract
} from "../generated/schema"
import { Artwork, Traits } from '../generated/templates'
import { Traits as TraitsContractTemplate } from "../generated/templates/Traits/Traits"
import { Artwork as ArtworkContractTemplate } from "../generated/templates/Artwork/Artwork"
import { concat2 } from "./helpers"

export function handleProjectRegistered(event: ProjectRegisteredEvent): void {
  Artwork.create(event.params.artwork);
  Traits.create(event.params.traits);

  let artworkContract = new ArtworkContract(event.params.artwork.toHexString());
  let traitsContract = new TraitsContract(event.params.traits.toHexString());

  artworkContract.project = event.params.projectId.toString();
  traitsContract.project = event.params.projectId.toString();

  artworkContract.traitsContract = traitsContract.id;
  traitsContract.artworkContract = artworkContract.id;

  artworkContract.save();
  traitsContract.save();

  let _artworkContract = ArtworkContractTemplate.bind(event.params.artwork);
  let _traitsContract = TraitsContractTemplate.bind(event.params.traits);

  let project = new Project(event.params.projectId.toString());
  project.artworkContract = artworkContract.id;
  project.traitsContract = traitsContract.id;
  project.name = _artworkContract.name();
  project.symbol = _artworkContract.symbol();
  project.baseURI = _artworkContract.baseURI();
  project.totalSupply = BigInt.fromString("0");
  project.scriptJSON = _artworkContract.scriptJSON();
  project.script = _artworkContract.projectScripts().join("");
  project.totalSupply = BigInt.fromString("0");
  project.nextTokenId = BigInt.fromString("0");
  project.auctionStartPrice = _traitsContract.auctionStartPrice();
  project.auctionEndPrice = _traitsContract.auctionEndPrice();
  project.auctionStartTime = _traitsContract.auctionStartTime().toI32();
  project.auctionEndTime = _traitsContract.auctionEndTime().toI32();
  project.save();

  let returnedTraits = _traitsContract.traits();
  for (let i=0; i < returnedTraits.get_traitTokenIds().length; i++) {
    let trait = new Trait(concat2(traitsContract.id, returnedTraits.get_traitTokenIds()[i].toString()));
    trait.project = project.id;
    trait.traitsContract = traitsContract.id;
    trait.tokenId = returnedTraits.get_traitTokenIds()[i];
    trait.name = returnedTraits.get_traitNames()[i];
    trait.value = returnedTraits.get_traitValues()[i];
    trait.maxSupply = _traitsContract.maxSupply(returnedTraits.get_traitTokenIds()[i]);
    trait.totalSupply = BigInt.fromString("0");
    trait.typeIndex = returnedTraits.get_traitTypeIndexes()[i];
    trait.typeName = returnedTraits.get_traitTypeNames()[i];
    trait.typeValue = returnedTraits.get_traitTypeValues()[i];
    trait.save();
  }
}