import { log, ByteArray, BigInt, Address, crypto, store } from "@graphprotocol/graph-ts"
import {
  ProjectRegistered as ProjectRegisteredEvent,
} from "../generated/ProjectRegsitry/ProjectRegistry"
import {
  Project, StudioContract, Trait, TraitType, TraitsContract
} from "../generated/schema"
import { Studio, Traits } from '../generated/templates'
import { Traits as _TraitsContract } from "../generated/templates/Traits/Traits"
import { Studio as _StudioContract } from "../generated/templates/Studio/Studio"
import { concat2 } from "./helpers"

export function handleProjectRegistered(event: ProjectRegisteredEvent): void {
  Studio.create(event.params.studio);
  Traits.create(event.params.traits);

  let studioContract = new StudioContract(event.params.studio.toHexString());
  let traitsContract = new TraitsContract(event.params.traits.toHexString());

  studioContract.project = event.params.projectId.toString();
  traitsContract.project = event.params.projectId.toString();

  studioContract.traitsContract = traitsContract.id;
  traitsContract.studioContract = studioContract.id;

  studioContract.save();
  traitsContract.save();

  let _studioContract = _StudioContract.bind(event.params.studio);
  let _traitsContract = _TraitsContract.bind(event.params.traits);

  let project = new Project(event.params.projectId.toString());
  project.studioContract = studioContract.id;
  project.traitsContract = traitsContract.id;
  project.name = _studioContract.name();
  project.symbol = _studioContract.symbol();
  project.baseURI = _studioContract.baseURI();
  project.artistAddress = _studioContract.artistAddress().toHexString();
  project.totalSupply = BigInt.fromString("0");
  project.scriptJSON = _studioContract.scriptJSON();
  project.script = _studioContract.projectScripts().join("");
  project.totalSupply = BigInt.fromString("0");
  project.auctionStartPrice = _traitsContract.auctionStartPrice();
  project.auctionEndPrice = _traitsContract.auctionEndPrice();
  project.auctionStartTime = _traitsContract.auctionStartTime().toI32();
  project.auctionEndTime = _traitsContract.auctionEndTime().toI32();
  project.save();

  let returnedTraits = _traitsContract.traits();
  for (let i=0; i < returnedTraits.get_traitTokenIds().length; i++) {
    let traitType = TraitType.load(concat2(traitsContract.id, returnedTraits.get_traitTypeIndexes()[i].toString()));
    if (!traitType) {
      traitType = new TraitType(concat2(traitsContract.id, returnedTraits.get_traitTypeIndexes()[i].toString()));
      traitType.index = i;
      traitType.project = project.id;
      traitType.traitsContract = traitsContract.id;
      traitType.name = returnedTraits.get_traitTypeNames()[i];
      traitType.value = returnedTraits.get_traitTypeValues()[i];
      traitType.save();
    }

    let trait = new Trait(concat2(traitsContract.id, returnedTraits.get_traitTokenIds()[i].toString()));
    trait.traitsContract = traitsContract.id;
    trait.tokenId = returnedTraits.get_traitTokenIds()[i];
    trait.name = returnedTraits.get_traitNames()[i];
    trait.value = returnedTraits.get_traitValues()[i];
    trait.maxSupply = _traitsContract.maxSupply(returnedTraits.get_traitTokenIds()[i]);
    trait.totalSupply = BigInt.fromString("0");
    trait.traitType = traitType.id;
    trait.save();
  }
}