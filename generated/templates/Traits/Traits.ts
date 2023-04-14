// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ArtistRevenueClaimed extends ethereum.Event {
  get params(): ArtistRevenueClaimed__Params {
    return new ArtistRevenueClaimed__Params(this);
  }
}

export class ArtistRevenueClaimed__Params {
  _event: ArtistRevenueClaimed;

  constructor(event: ArtistRevenueClaimed) {
    this._event = event;
  }

  get claimedRevenue(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ArtistRevenueClaimerUpdated extends ethereum.Event {
  get params(): ArtistRevenueClaimerUpdated__Params {
    return new ArtistRevenueClaimerUpdated__Params(this);
  }
}

export class ArtistRevenueClaimerUpdated__Params {
  _event: ArtistRevenueClaimerUpdated;

  constructor(event: ArtistRevenueClaimerUpdated) {
    this._event = event;
  }

  get claimer(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PlatformRevenueClaimed extends ethereum.Event {
  get params(): PlatformRevenueClaimed__Params {
    return new PlatformRevenueClaimed__Params(this);
  }
}

export class PlatformRevenueClaimed__Params {
  _event: PlatformRevenueClaimed;

  constructor(event: PlatformRevenueClaimed) {
    this._event = event;
  }

  get claimedRevenue(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class PlatormRevenueClaimerUpdated extends ethereum.Event {
  get params(): PlatormRevenueClaimerUpdated__Params {
    return new PlatormRevenueClaimerUpdated__Params(this);
  }
}

export class PlatormRevenueClaimerUpdated__Params {
  _event: PlatormRevenueClaimerUpdated;

  constructor(event: PlatormRevenueClaimerUpdated) {
    this._event = event;
  }

  get claimer(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TraitsBought extends ethereum.Event {
  get params(): TraitsBought__Params {
    return new TraitsBought__Params(this);
  }
}

export class TraitsBought__Params {
  _event: TraitsBought;

  constructor(event: TraitsBought) {
    this._event = event;
  }

  get recipient(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get traitTokenIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get traitQuantities(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Traits__traitResult {
  value0: string;
  value1: string;
  value2: string;
  value3: string;

  constructor(value0: string, value1: string, value2: string, value3: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    return map;
  }

  get_traitName(): string {
    return this.value0;
  }

  get_traitValue(): string {
    return this.value1;
  }

  get_traitTypeName(): string {
    return this.value2;
  }

  get_traitTypeValue(): string {
    return this.value3;
  }
}

export class Traits__traitTypesResult {
  value0: Array<string>;
  value1: Array<string>;

  constructor(value0: Array<string>, value1: Array<string>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromStringArray(this.value0));
    map.set("value1", ethereum.Value.fromStringArray(this.value1));
    return map;
  }

  get_traitTypeNames(): Array<string> {
    return this.value0;
  }

  get_traitTypeValues(): Array<string> {
    return this.value1;
  }
}

export class Traits__traitsResult {
  value0: Array<BigInt>;
  value1: Array<string>;
  value2: Array<string>;
  value3: Array<BigInt>;
  value4: Array<string>;
  value5: Array<string>;
  value6: Array<BigInt>;
  value7: Array<BigInt>;

  constructor(
    value0: Array<BigInt>,
    value1: Array<string>,
    value2: Array<string>,
    value3: Array<BigInt>,
    value4: Array<string>,
    value5: Array<string>,
    value6: Array<BigInt>,
    value7: Array<BigInt>
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromStringArray(this.value1));
    map.set("value2", ethereum.Value.fromStringArray(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigIntArray(this.value3));
    map.set("value4", ethereum.Value.fromStringArray(this.value4));
    map.set("value5", ethereum.Value.fromStringArray(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigIntArray(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigIntArray(this.value7));
    return map;
  }

  get_traitTokenIds(): Array<BigInt> {
    return this.value0;
  }

  get_traitNames(): Array<string> {
    return this.value1;
  }

  get_traitValues(): Array<string> {
    return this.value2;
  }

  get_traitTypeIndexes(): Array<BigInt> {
    return this.value3;
  }

  get_traitTypeNames(): Array<string> {
    return this.value4;
  }

  get_traitTypeValues(): Array<string> {
    return this.value5;
  }

  get_traitTotalSupplys(): Array<BigInt> {
    return this.value6;
  }

  get_traitMaxSupplys(): Array<BigInt> {
    return this.value7;
  }
}

export class Traits extends ethereum.SmartContract {
  static bind(address: Address): Traits {
    return new Traits("Traits", address);
  }

  AUCTION_PLATFORM_FEE_NUMERATOR(): BigInt {
    let result = super.call(
      "AUCTION_PLATFORM_FEE_NUMERATOR",
      "AUCTION_PLATFORM_FEE_NUMERATOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_AUCTION_PLATFORM_FEE_NUMERATOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "AUCTION_PLATFORM_FEE_NUMERATOR",
      "AUCTION_PLATFORM_FEE_NUMERATOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  FEE_DENOMINATOR(): BigInt {
    let result = super.call(
      "FEE_DENOMINATOR",
      "FEE_DENOMINATOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_FEE_DENOMINATOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "FEE_DENOMINATOR",
      "FEE_DENOMINATOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  VERSION(): string {
    let result = super.call("VERSION", "VERSION():(string)", []);

    return result[0].toString();
  }

  try_VERSION(): ethereum.CallResult<string> {
    let result = super.tryCall("VERSION", "VERSION():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  artistClaimableRevenues(): BigInt {
    let result = super.call(
      "artistClaimableRevenues",
      "artistClaimableRevenues():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_artistClaimableRevenues(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "artistClaimableRevenues",
      "artistClaimableRevenues():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  artistRevenueClaimer(): Address {
    let result = super.call(
      "artistRevenueClaimer",
      "artistRevenueClaimer():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_artistRevenueClaimer(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "artistRevenueClaimer",
      "artistRevenueClaimer():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  artwork(): Address {
    let result = super.call("artwork", "artwork():(address)", []);

    return result[0].toAddress();
  }

  try_artwork(): ethereum.CallResult<Address> {
    let result = super.tryCall("artwork", "artwork():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  auctionEndPrice(): BigInt {
    let result = super.call(
      "auctionEndPrice",
      "auctionEndPrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_auctionEndPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "auctionEndPrice",
      "auctionEndPrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  auctionEndTime(): BigInt {
    let result = super.call("auctionEndTime", "auctionEndTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_auctionEndTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "auctionEndTime",
      "auctionEndTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  auctionStartPrice(): BigInt {
    let result = super.call(
      "auctionStartPrice",
      "auctionStartPrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_auctionStartPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "auctionStartPrice",
      "auctionStartPrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  auctionStartTime(): BigInt {
    let result = super.call(
      "auctionStartTime",
      "auctionStartTime():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_auctionStartTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "auctionStartTime",
      "auctionStartTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  exists(id: BigInt): boolean {
    let result = super.call("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBoolean();
  }

  try_exists(id: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxSupply(_tokenId: BigInt): BigInt {
    let result = super.call("maxSupply", "maxSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toBigInt();
  }

  try_maxSupply(_tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  platformClaimableRevenues(): BigInt {
    let result = super.call(
      "platformClaimableRevenues",
      "platformClaimableRevenues():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_platformClaimableRevenues(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "platformClaimableRevenues",
      "platformClaimableRevenues():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  platformRevenueClaimer(): Address {
    let result = super.call(
      "platformRevenueClaimer",
      "platformRevenueClaimer():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_platformRevenueClaimer(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "platformRevenueClaimer",
      "platformRevenueClaimer():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(id: BigInt): BigInt {
    let result = super.call("totalSupply", "totalSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBigInt();
  }

  try_totalSupply(id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupply",
      "totalSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  trait(_tokenId: BigInt): Traits__traitResult {
    let result = super.call(
      "trait",
      "trait(uint256):(string,string,string,string)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return new Traits__traitResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString()
    );
  }

  try_trait(_tokenId: BigInt): ethereum.CallResult<Traits__traitResult> {
    let result = super.tryCall(
      "trait",
      "trait(uint256):(string,string,string,string)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Traits__traitResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString()
      )
    );
  }

  traitPrice(): BigInt {
    let result = super.call("traitPrice", "traitPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_traitPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("traitPrice", "traitPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  traitTypes(): Traits__traitTypesResult {
    let result = super.call(
      "traitTypes",
      "traitTypes():(string[],string[])",
      []
    );

    return new Traits__traitTypesResult(
      result[0].toStringArray(),
      result[1].toStringArray()
    );
  }

  try_traitTypes(): ethereum.CallResult<Traits__traitTypesResult> {
    let result = super.tryCall(
      "traitTypes",
      "traitTypes():(string[],string[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Traits__traitTypesResult(
        value[0].toStringArray(),
        value[1].toStringArray()
      )
    );
  }

  traits(): Traits__traitsResult {
    let result = super.call(
      "traits",
      "traits():(uint256[],string[],string[],uint256[],string[],string[],uint256[],uint256[])",
      []
    );

    return new Traits__traitsResult(
      result[0].toBigIntArray(),
      result[1].toStringArray(),
      result[2].toStringArray(),
      result[3].toBigIntArray(),
      result[4].toStringArray(),
      result[5].toStringArray(),
      result[6].toBigIntArray(),
      result[7].toBigIntArray()
    );
  }

  try_traits(): ethereum.CallResult<Traits__traitsResult> {
    let result = super.tryCall(
      "traits",
      "traits():(uint256[],string[],string[],uint256[],string[],string[],uint256[],uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Traits__traitsResult(
        value[0].toBigIntArray(),
        value[1].toStringArray(),
        value[2].toStringArray(),
        value[3].toBigIntArray(),
        value[4].toStringArray(),
        value[5].toStringArray(),
        value[6].toBigIntArray(),
        value[7].toBigIntArray()
      )
    );
  }

  uri(param0: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_uri(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _artwork(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _uri(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _owner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _platformRevenueClaimer(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _artistRevenueClaimer(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyTraitsCall extends ethereum.Call {
  get inputs(): BuyTraitsCall__Inputs {
    return new BuyTraitsCall__Inputs(this);
  }

  get outputs(): BuyTraitsCall__Outputs {
    return new BuyTraitsCall__Outputs(this);
  }
}

export class BuyTraitsCall__Inputs {
  _call: BuyTraitsCall;

  constructor(call: BuyTraitsCall) {
    this._call = call;
  }

  get _recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _traitTokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _traitAmounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class BuyTraitsCall__Outputs {
  _call: BuyTraitsCall;

  constructor(call: BuyTraitsCall) {
    this._call = call;
  }
}

export class ClaimArtistRevenueCall extends ethereum.Call {
  get inputs(): ClaimArtistRevenueCall__Inputs {
    return new ClaimArtistRevenueCall__Inputs(this);
  }

  get outputs(): ClaimArtistRevenueCall__Outputs {
    return new ClaimArtistRevenueCall__Outputs(this);
  }
}

export class ClaimArtistRevenueCall__Inputs {
  _call: ClaimArtistRevenueCall;

  constructor(call: ClaimArtistRevenueCall) {
    this._call = call;
  }
}

export class ClaimArtistRevenueCall__Outputs {
  _call: ClaimArtistRevenueCall;

  constructor(call: ClaimArtistRevenueCall) {
    this._call = call;
  }
}

export class ClaimPlatformRevenueCall extends ethereum.Call {
  get inputs(): ClaimPlatformRevenueCall__Inputs {
    return new ClaimPlatformRevenueCall__Inputs(this);
  }

  get outputs(): ClaimPlatformRevenueCall__Outputs {
    return new ClaimPlatformRevenueCall__Outputs(this);
  }
}

export class ClaimPlatformRevenueCall__Inputs {
  _call: ClaimPlatformRevenueCall;

  constructor(call: ClaimPlatformRevenueCall) {
    this._call = call;
  }
}

export class ClaimPlatformRevenueCall__Outputs {
  _call: ClaimPlatformRevenueCall;

  constructor(call: ClaimPlatformRevenueCall) {
    this._call = call;
  }
}

export class CreateTraitsAndTypesCall extends ethereum.Call {
  get inputs(): CreateTraitsAndTypesCall__Inputs {
    return new CreateTraitsAndTypesCall__Inputs(this);
  }

  get outputs(): CreateTraitsAndTypesCall__Outputs {
    return new CreateTraitsAndTypesCall__Outputs(this);
  }
}

export class CreateTraitsAndTypesCall__Inputs {
  _call: CreateTraitsAndTypesCall;

  constructor(call: CreateTraitsAndTypesCall) {
    this._call = call;
  }

  get _traitTypeNames(): Array<string> {
    return this._call.inputValues[0].value.toStringArray();
  }

  get _traitTypeValues(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }

  get _traitNames(): Array<string> {
    return this._call.inputValues[2].value.toStringArray();
  }

  get _traitValues(): Array<string> {
    return this._call.inputValues[3].value.toStringArray();
  }

  get _traitTypeIndexes(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }

  get _traitMaxSupplys(): Array<BigInt> {
    return this._call.inputValues[5].value.toBigIntArray();
  }
}

export class CreateTraitsAndTypesCall__Outputs {
  _call: CreateTraitsAndTypesCall;

  constructor(call: CreateTraitsAndTypesCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class ScheduleAuctionCall extends ethereum.Call {
  get inputs(): ScheduleAuctionCall__Inputs {
    return new ScheduleAuctionCall__Inputs(this);
  }

  get outputs(): ScheduleAuctionCall__Outputs {
    return new ScheduleAuctionCall__Outputs(this);
  }
}

export class ScheduleAuctionCall__Inputs {
  _call: ScheduleAuctionCall;

  constructor(call: ScheduleAuctionCall) {
    this._call = call;
  }

  get _auctionStartTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _auctionEndTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _auctionStartPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _auctionEndPrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ScheduleAuctionCall__Outputs {
  _call: ScheduleAuctionCall;

  constructor(call: ScheduleAuctionCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class TransferTraitsToCreateArtworkCall extends ethereum.Call {
  get inputs(): TransferTraitsToCreateArtworkCall__Inputs {
    return new TransferTraitsToCreateArtworkCall__Inputs(this);
  }

  get outputs(): TransferTraitsToCreateArtworkCall__Outputs {
    return new TransferTraitsToCreateArtworkCall__Outputs(this);
  }
}

export class TransferTraitsToCreateArtworkCall__Inputs {
  _call: TransferTraitsToCreateArtworkCall;

  constructor(call: TransferTraitsToCreateArtworkCall) {
    this._call = call;
  }

  get _caller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _traitTokenIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class TransferTraitsToCreateArtworkCall__Outputs {
  _call: TransferTraitsToCreateArtworkCall;

  constructor(call: TransferTraitsToCreateArtworkCall) {
    this._call = call;
  }
}

export class UpdateArtistRevenueClaimerCall extends ethereum.Call {
  get inputs(): UpdateArtistRevenueClaimerCall__Inputs {
    return new UpdateArtistRevenueClaimerCall__Inputs(this);
  }

  get outputs(): UpdateArtistRevenueClaimerCall__Outputs {
    return new UpdateArtistRevenueClaimerCall__Outputs(this);
  }
}

export class UpdateArtistRevenueClaimerCall__Inputs {
  _call: UpdateArtistRevenueClaimerCall;

  constructor(call: UpdateArtistRevenueClaimerCall) {
    this._call = call;
  }

  get _claimer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateArtistRevenueClaimerCall__Outputs {
  _call: UpdateArtistRevenueClaimerCall;

  constructor(call: UpdateArtistRevenueClaimerCall) {
    this._call = call;
  }
}

export class UpdatePlatformRevenueClaimerCall extends ethereum.Call {
  get inputs(): UpdatePlatformRevenueClaimerCall__Inputs {
    return new UpdatePlatformRevenueClaimerCall__Inputs(this);
  }

  get outputs(): UpdatePlatformRevenueClaimerCall__Outputs {
    return new UpdatePlatformRevenueClaimerCall__Outputs(this);
  }
}

export class UpdatePlatformRevenueClaimerCall__Inputs {
  _call: UpdatePlatformRevenueClaimerCall;

  constructor(call: UpdatePlatformRevenueClaimerCall) {
    this._call = call;
  }

  get _claimer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdatePlatformRevenueClaimerCall__Outputs {
  _call: UpdatePlatformRevenueClaimerCall;

  constructor(call: UpdatePlatformRevenueClaimerCall) {
    this._call = call;
  }
}

export class UpdateURICall extends ethereum.Call {
  get inputs(): UpdateURICall__Inputs {
    return new UpdateURICall__Inputs(this);
  }

  get outputs(): UpdateURICall__Outputs {
    return new UpdateURICall__Outputs(this);
  }
}

export class UpdateURICall__Inputs {
  _call: UpdateURICall;

  constructor(call: UpdateURICall) {
    this._call = call;
  }

  get _uri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class UpdateURICall__Outputs {
  _call: UpdateURICall;

  constructor(call: UpdateURICall) {
    this._call = call;
  }
}
