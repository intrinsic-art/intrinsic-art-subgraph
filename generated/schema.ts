// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Project extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Project entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Project must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Project", id.toString(), this);
    }
  }

  static load(id: string): Project | null {
    return changetype<Project | null>(store.get("Project", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get artworkContract(): string {
    let value = this.get("artworkContract");
    return value!.toString();
  }

  set artworkContract(value: string) {
    this.set("artworkContract", Value.fromString(value));
  }

  get traitsContract(): string {
    let value = this.get("traitsContract");
    return value!.toString();
  }

  set traitsContract(value: string) {
    this.set("traitsContract", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get baseURI(): string {
    let value = this.get("baseURI");
    return value!.toString();
  }

  set baseURI(value: string) {
    this.set("baseURI", Value.fromString(value));
  }

  get artistAddress(): string {
    let value = this.get("artistAddress");
    return value!.toString();
  }

  set artistAddress(value: string) {
    this.set("artistAddress", Value.fromString(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get scriptJSON(): string {
    let value = this.get("scriptJSON");
    return value!.toString();
  }

  set scriptJSON(value: string) {
    this.set("scriptJSON", Value.fromString(value));
  }

  get script(): string {
    let value = this.get("script");
    return value!.toString();
  }

  set script(value: string) {
    this.set("script", Value.fromString(value));
  }

  get traitTypes(): Array<string> {
    let value = this.get("traitTypes");
    return value!.toStringArray();
  }

  set traitTypes(value: Array<string>) {
    this.set("traitTypes", Value.fromStringArray(value));
  }

  get auctionStartPrice(): BigInt {
    let value = this.get("auctionStartPrice");
    return value!.toBigInt();
  }

  set auctionStartPrice(value: BigInt) {
    this.set("auctionStartPrice", Value.fromBigInt(value));
  }

  get auctionEndPrice(): BigInt {
    let value = this.get("auctionEndPrice");
    return value!.toBigInt();
  }

  set auctionEndPrice(value: BigInt) {
    this.set("auctionEndPrice", Value.fromBigInt(value));
  }

  get auctionStartTime(): i32 {
    let value = this.get("auctionStartTime");
    return value!.toI32();
  }

  set auctionStartTime(value: i32) {
    this.set("auctionStartTime", Value.fromI32(value));
  }

  get auctionEndTime(): i32 {
    let value = this.get("auctionEndTime");
    return value!.toI32();
  }

  set auctionEndTime(value: i32) {
    this.set("auctionEndTime", Value.fromI32(value));
  }
}

export class ArtworkContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ArtworkContract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ArtworkContract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ArtworkContract", id.toString(), this);
    }
  }

  static load(id: string): ArtworkContract | null {
    return changetype<ArtworkContract | null>(store.get("ArtworkContract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get project(): string {
    let value = this.get("project");
    return value!.toString();
  }

  set project(value: string) {
    this.set("project", Value.fromString(value));
  }

  get traitsContract(): string {
    let value = this.get("traitsContract");
    return value!.toString();
  }

  set traitsContract(value: string) {
    this.set("traitsContract", Value.fromString(value));
  }

  get artworks(): Array<string> {
    let value = this.get("artworks");
    return value!.toStringArray();
  }

  set artworks(value: Array<string>) {
    this.set("artworks", Value.fromStringArray(value));
  }
}

export class TraitsContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TraitsContract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TraitsContract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TraitsContract", id.toString(), this);
    }
  }

  static load(id: string): TraitsContract | null {
    return changetype<TraitsContract | null>(store.get("TraitsContract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get project(): string {
    let value = this.get("project");
    return value!.toString();
  }

  set project(value: string) {
    this.set("project", Value.fromString(value));
  }

  get artworkContract(): string {
    let value = this.get("artworkContract");
    return value!.toString();
  }

  set artworkContract(value: string) {
    this.set("artworkContract", Value.fromString(value));
  }
}

export class Artwork extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Artwork entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Artwork must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Artwork", id.toString(), this);
    }
  }

  static load(id: string): Artwork | null {
    return changetype<Artwork | null>(store.get("Artwork", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get artworkContract(): string {
    let value = this.get("artworkContract");
    return value!.toString();
  }

  set artworkContract(value: string) {
    this.set("artworkContract", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value!.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get createdTimestamp(): i32 {
    let value = this.get("createdTimestamp");
    return value!.toI32();
  }

  set createdTimestamp(value: i32) {
    this.set("createdTimestamp", Value.fromI32(value));
  }

  get decomposed(): boolean {
    let value = this.get("decomposed");
    return value!.toBoolean();
  }

  set decomposed(value: boolean) {
    this.set("decomposed", Value.fromBoolean(value));
  }

  get traits(): Array<string> | null {
    let value = this.get("traits");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set traits(value: Array<string> | null) {
    if (!value) {
      this.unset("traits");
    } else {
      this.set("traits", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get artworks(): Array<string> {
    let value = this.get("artworks");
    return value!.toStringArray();
  }

  set artworks(value: Array<string>) {
    this.set("artworks", Value.fromStringArray(value));
  }

  get traitBalances(): Array<string> {
    let value = this.get("traitBalances");
    return value!.toStringArray();
  }

  set traitBalances(value: Array<string>) {
    this.set("traitBalances", Value.fromStringArray(value));
  }
}

export class Trait extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Trait entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Trait must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Trait", id.toString(), this);
    }
  }

  static load(id: string): Trait | null {
    return changetype<Trait | null>(store.get("Trait", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get traitsContract(): string {
    let value = this.get("traitsContract");
    return value!.toString();
  }

  set traitsContract(value: string) {
    this.set("traitsContract", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    return value!.toString();
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }

  get maxSupply(): BigInt {
    let value = this.get("maxSupply");
    return value!.toBigInt();
  }

  set maxSupply(value: BigInt) {
    this.set("maxSupply", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get traitType(): string {
    let value = this.get("traitType");
    return value!.toString();
  }

  set traitType(value: string) {
    this.set("traitType", Value.fromString(value));
  }

  get traitBalances(): Array<string> {
    let value = this.get("traitBalances");
    return value!.toStringArray();
  }

  set traitBalances(value: Array<string>) {
    this.set("traitBalances", Value.fromStringArray(value));
  }
}

export class TraitBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TraitBalance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TraitBalance must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TraitBalance", id.toString(), this);
    }
  }

  static load(id: string): TraitBalance | null {
    return changetype<TraitBalance | null>(store.get("TraitBalance", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get trait(): string {
    let value = this.get("trait");
    return value!.toString();
  }

  set trait(value: string) {
    this.set("trait", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class TraitType extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TraitType entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TraitType must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TraitType", id.toString(), this);
    }
  }

  static load(id: string): TraitType | null {
    return changetype<TraitType | null>(store.get("TraitType", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): i32 {
    let value = this.get("index");
    return value!.toI32();
  }

  set index(value: i32) {
    this.set("index", Value.fromI32(value));
  }

  get traitsContract(): string {
    let value = this.get("traitsContract");
    return value!.toString();
  }

  set traitsContract(value: string) {
    this.set("traitsContract", Value.fromString(value));
  }

  get project(): string {
    let value = this.get("project");
    return value!.toString();
  }

  set project(value: string) {
    this.set("project", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get value(): string {
    let value = this.get("value");
    return value!.toString();
  }

  set value(value: string) {
    this.set("value", Value.fromString(value));
  }

  get traits(): Array<string> {
    let value = this.get("traits");
    return value!.toStringArray();
  }

  set traits(value: Array<string>) {
    this.set("traits", Value.fromStringArray(value));
  }
}
