import { log, ByteArray, BigInt, Address, crypto, store } from "@graphprotocol/graph-ts"
import {
  ProjectRegistered as ProjectRegisteredEvent,
} from "../generated/ProjectRegsitry/ProjectRegistry"
import {
  Project, ArtworkContract, Trait, TraitsContract, PrimarySalesSplit, SecondarySalesSplit
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
  project.artistAddress = _artworkContract.artistAddress();
  project.totalSupply = BigInt.fromString("0");
  project.metadataJSON = _artworkContract.metadataJSON();
  project.script = _artworkContract.script();
  project.totalSupply = BigInt.fromString("0");
  project.nextTokenId = BigInt.fromString("0");
  project.auctionStartPrice = _traitsContract.auctionStartPrice();
  project.auctionEndPrice = _traitsContract.auctionEndPrice();
  project.auctionStartTime = _traitsContract.auctionStartTime().toI32();
  project.auctionEndTime = _traitsContract.auctionEndTime().toI32();
  project.auctionPriceSteps = _traitsContract.auctionPriceSteps().toI32();
  project.traitsSaleStartTime = _traitsContract.traitsSaleStartTime().toI32();
  project.whitelistStartTime = _artworkContract.whitelistStartTime().toI32();
  project.proofMinted = false;
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

  // Update primary sales payees
  const primarySalesPayeesData = _traitsContract.payees();
  const primarySalesPayees = primarySalesPayeesData.getPayees_();
  const primarySalesShares = primarySalesPayeesData.getShares_();

  for (let i=0; i < primarySalesPayees.length; i++) {
    let primarySalesPayee = new PrimarySalesSplit(concat2(traitsContract.id, primarySalesPayees[i].toHexString()));
    primarySalesPayee.traitsContract = traitsContract.id;
    primarySalesPayee.payee = primarySalesPayees[i].toHexString();
    primarySalesPayee.shares = primarySalesShares[i];

    primarySalesPayee.save();
  }

    // Update secondary sales payees
    const secondarySalesPayeesData = _traitsContract.payees();
    const secondarySalesPayees = secondarySalesPayeesData.getPayees_();
    const secondarySalesShares = secondarySalesPayeesData.getShares_();
  
    for (let i=0; i < secondarySalesPayees.length; i++) {
      let secondarySalesPayee = new SecondarySalesSplit(concat2(artworkContract.id, secondarySalesPayees[i].toHexString()));
      secondarySalesPayee.artworkContract = artworkContract.id;
      secondarySalesPayee.payee = secondarySalesPayees[i].toHexString();
      secondarySalesPayee.shares = secondarySalesShares[i];
  
      secondarySalesPayee.save();
    }
}