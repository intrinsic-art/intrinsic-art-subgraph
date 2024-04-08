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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

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

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ArtworkMinted extends ethereum.Event {
  get params(): ArtworkMinted__Params {
    return new ArtworkMinted__Params(this);
  }
}

export class ArtworkMinted__Params {
  _event: ArtworkMinted;

  constructor(event: ArtworkMinted) {
    this._event = event;
  }

  get artworkTokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get traitTokenIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get hash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get creator(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class ProofArtworkMinted extends ethereum.Event {
  get params(): ProofArtworkMinted__Params {
    return new ProofArtworkMinted__Params(this);
  }
}

export class ProofArtworkMinted__Params {
  _event: ProofArtworkMinted;

  constructor(event: ProofArtworkMinted) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get caller(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TraitsReclaimed extends ethereum.Event {
  get params(): TraitsReclaimed__Params {
    return new TraitsReclaimed__Params(this);
  }
}

export class TraitsReclaimed__Params {
  _event: TraitsReclaimed;

  constructor(event: TraitsReclaimed) {
    this._event = event;
  }

  get artworkTokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get caller(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WhitelistArtworkMinted extends ethereum.Event {
  get params(): WhitelistArtworkMinted__Params {
    return new WhitelistArtworkMinted__Params(this);
  }
}

export class WhitelistArtworkMinted__Params {
  _event: WhitelistArtworkMinted;

  constructor(event: WhitelistArtworkMinted) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get caller(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class WhitelistUpdated extends ethereum.Event {
  get params(): WhitelistUpdated__Params {
    return new WhitelistUpdated__Params(this);
  }
}

export class WhitelistUpdated__Params {
  _event: WhitelistUpdated;

  constructor(event: WhitelistUpdated) {
    this._event = event;
  }

  get whitelistStartTime(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get whitelistAddresses(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }

  get whitelistAmounts(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class Artwork__artworkResult {
  value0: Array<BigInt>;
  value1: Array<string>;
  value2: Array<string>;
  value3: Array<string>;
  value4: Array<string>;
  value5: Bytes;

  constructor(
    value0: Array<BigInt>,
    value1: Array<string>,
    value2: Array<string>,
    value3: Array<string>,
    value4: Array<string>,
    value5: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromStringArray(this.value1));
    map.set("value2", ethereum.Value.fromStringArray(this.value2));
    map.set("value3", ethereum.Value.fromStringArray(this.value3));
    map.set("value4", ethereum.Value.fromStringArray(this.value4));
    map.set("value5", ethereum.Value.fromFixedBytes(this.value5));
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

  get_traitTypeNames(): Array<string> {
    return this.value3;
  }

  get_traitTypeValues(): Array<string> {
    return this.value4;
  }

  get_hash(): Bytes {
    return this.value5;
  }
}

export class Artwork__metadataJSONStringStorageResult {
  value0: i32;
  value1: Address;

  constructor(value0: i32, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  getStringStorageSlot(): i32 {
    return this.value0;
  }

  getStringStorageAddress(): Address {
    return this.value1;
  }
}

export class Artwork__royaltyInfoResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue0(): Address {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }
}

export class Artwork__scriptStringStorageResult {
  value0: i32;
  value1: Address;

  constructor(value0: i32, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  getStringStorageSlot(): i32 {
    return this.value0;
  }

  getStringStorageAddress(): Address {
    return this.value1;
  }
}

export class Artwork extends ethereum.SmartContract {
  static bind(address: Address): Artwork {
    return new Artwork("Artwork", address);
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

  artistAddress(): Address {
    let result = super.call("artistAddress", "artistAddress():(address)", []);

    return result[0].toAddress();
  }

  try_artistAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "artistAddress",
      "artistAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  artwork(_artworkTokenId: BigInt): Artwork__artworkResult {
    let result = super.call(
      "artwork",
      "artwork(uint256):(uint256[],string[],string[],string[],string[],bytes32)",
      [ethereum.Value.fromUnsignedBigInt(_artworkTokenId)]
    );

    return new Artwork__artworkResult(
      result[0].toBigIntArray(),
      result[1].toStringArray(),
      result[2].toStringArray(),
      result[3].toStringArray(),
      result[4].toStringArray(),
      result[5].toBytes()
    );
  }

  try_artwork(
    _artworkTokenId: BigInt
  ): ethereum.CallResult<Artwork__artworkResult> {
    let result = super.tryCall(
      "artwork",
      "artwork(uint256):(uint256[],string[],string[],string[],string[],bytes32)",
      [ethereum.Value.fromUnsignedBigInt(_artworkTokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Artwork__artworkResult(
        value[0].toBigIntArray(),
        value[1].toStringArray(),
        value[2].toStringArray(),
        value[3].toStringArray(),
        value[4].toStringArray(),
        value[5].toBytes()
      )
    );
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  cancelled(): boolean {
    let result = super.call("cancelled", "cancelled():(bool)", []);

    return result[0].toBoolean();
  }

  try_cancelled(): ethereum.CallResult<boolean> {
    let result = super.tryCall("cancelled", "cancelled():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isHashUsed(_hash: Bytes): boolean {
    let result = super.call("isHashUsed", "isHashUsed(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_hash)
    ]);

    return result[0].toBoolean();
  }

  try_isHashUsed(_hash: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("isHashUsed", "isHashUsed(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(_hash)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  metadataJSON(): string {
    let result = super.call("metadataJSON", "metadataJSON():(string)", []);

    return result[0].toString();
  }

  try_metadataJSON(): ethereum.CallResult<string> {
    let result = super.tryCall("metadataJSON", "metadataJSON():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  metadataJSONStringStorage(): Artwork__metadataJSONStringStorageResult {
    let result = super.call(
      "metadataJSONStringStorage",
      "metadataJSONStringStorage():(uint8,address)",
      []
    );

    return new Artwork__metadataJSONStringStorageResult(
      result[0].toI32(),
      result[1].toAddress()
    );
  }

  try_metadataJSONStringStorage(): ethereum.CallResult<
    Artwork__metadataJSONStringStorageResult
  > {
    let result = super.tryCall(
      "metadataJSONStringStorage",
      "metadataJSONStringStorage():(uint8,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Artwork__metadataJSONStringStorageResult(
        value[0].toI32(),
        value[1].toAddress()
      )
    );
  }

  mintArtwork(_traitTokenIds: Array<BigInt>, _saltNonce: BigInt): BigInt {
    let result = super.call(
      "mintArtwork",
      "mintArtwork(uint256[],uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigIntArray(_traitTokenIds),
        ethereum.Value.fromUnsignedBigInt(_saltNonce)
      ]
    );

    return result[0].toBigInt();
  }

  try_mintArtwork(
    _traitTokenIds: Array<BigInt>,
    _saltNonce: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintArtwork",
      "mintArtwork(uint256[],uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigIntArray(_traitTokenIds),
        ethereum.Value.fromUnsignedBigInt(_saltNonce)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nextTokenId(): BigInt {
    let result = super.call("nextTokenId", "nextTokenId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nextTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nextTokenId", "nextTokenId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  projectRegistry(): Address {
    let result = super.call(
      "projectRegistry",
      "projectRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_projectRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "projectRegistry",
      "projectRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proofMinted(): boolean {
    let result = super.call("proofMinted", "proofMinted():(bool)", []);

    return result[0].toBoolean();
  }

  try_proofMinted(): ethereum.CallResult<boolean> {
    let result = super.tryCall("proofMinted", "proofMinted():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  royaltyInfo(
    _tokenId: BigInt,
    _salePrice: BigInt
  ): Artwork__royaltyInfoResult {
    let result = super.call(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_salePrice)
      ]
    );

    return new Artwork__royaltyInfoResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_royaltyInfo(
    _tokenId: BigInt,
    _salePrice: BigInt
  ): ethereum.CallResult<Artwork__royaltyInfoResult> {
    let result = super.tryCall(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_salePrice)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Artwork__royaltyInfoResult(value[0].toAddress(), value[1].toBigInt())
    );
  }

  script(): string {
    let result = super.call("script", "script():(string)", []);

    return result[0].toString();
  }

  try_script(): ethereum.CallResult<string> {
    let result = super.tryCall("script", "script():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  scriptStringStorage(): Artwork__scriptStringStorageResult {
    let result = super.call(
      "scriptStringStorage",
      "scriptStringStorage():(uint8,address)",
      []
    );

    return new Artwork__scriptStringStorageResult(
      result[0].toI32(),
      result[1].toAddress()
    );
  }

  try_scriptStringStorage(): ethereum.CallResult<
    Artwork__scriptStringStorageResult
  > {
    let result = super.tryCall(
      "scriptStringStorage",
      "scriptStringStorage():(uint8,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Artwork__scriptStringStorageResult(
        value[0].toI32(),
        value[1].toAddress()
      )
    );
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

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(_tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(_tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  traits(): Address {
    let result = super.call("traits", "traits():(address)", []);

    return result[0].toAddress();
  }

  try_traits(): ethereum.CallResult<Address> {
    let result = super.tryCall("traits", "traits():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  whitelistMintsRemaining(param0: Address): BigInt {
    let result = super.call(
      "whitelistMintsRemaining",
      "whitelistMintsRemaining(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_whitelistMintsRemaining(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "whitelistMintsRemaining",
      "whitelistMintsRemaining(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  whitelistStartTime(): BigInt {
    let result = super.call(
      "whitelistStartTime",
      "whitelistStartTime():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_whitelistStartTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "whitelistStartTime",
      "whitelistStartTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _artistAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _projectRegistry(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _royaltyReceiver(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _metadataJSONStringStorage(): ConstructorCall_metadataJSONStringStorageStruct {
    return changetype<ConstructorCall_metadataJSONStringStorageStruct>(
      this._call.inputValues[5].value.toTuple()
    );
  }

  get _scriptStringStorage(): ConstructorCall_scriptStringStorageStruct {
    return changetype<ConstructorCall_scriptStringStorageStruct>(
      this._call.inputValues[6].value.toTuple()
    );
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall_metadataJSONStringStorageStruct extends ethereum.Tuple {
  get stringStorageSlot(): i32 {
    return this[0].toI32();
  }

  get stringStorageAddress(): Address {
    return this[1].toAddress();
  }
}

export class ConstructorCall_scriptStringStorageStruct extends ethereum.Tuple {
  get stringStorageSlot(): i32 {
    return this[0].toI32();
  }

  get stringStorageAddress(): Address {
    return this[1].toAddress();
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class MintArtworkCall extends ethereum.Call {
  get inputs(): MintArtworkCall__Inputs {
    return new MintArtworkCall__Inputs(this);
  }

  get outputs(): MintArtworkCall__Outputs {
    return new MintArtworkCall__Outputs(this);
  }
}

export class MintArtworkCall__Inputs {
  _call: MintArtworkCall;

  constructor(call: MintArtworkCall) {
    this._call = call;
  }

  get _traitTokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _saltNonce(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintArtworkCall__Outputs {
  _call: MintArtworkCall;

  constructor(call: MintArtworkCall) {
    this._call = call;
  }

  get _artworkTokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class MintArtworkProofCall extends ethereum.Call {
  get inputs(): MintArtworkProofCall__Inputs {
    return new MintArtworkProofCall__Inputs(this);
  }

  get outputs(): MintArtworkProofCall__Outputs {
    return new MintArtworkProofCall__Outputs(this);
  }
}

export class MintArtworkProofCall__Inputs {
  _call: MintArtworkProofCall;

  constructor(call: MintArtworkProofCall) {
    this._call = call;
  }

  get _traitTokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _saltNonce(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintArtworkProofCall__Outputs {
  _call: MintArtworkProofCall;

  constructor(call: MintArtworkProofCall) {
    this._call = call;
  }
}

export class MintArtworkWhitelistCall extends ethereum.Call {
  get inputs(): MintArtworkWhitelistCall__Inputs {
    return new MintArtworkWhitelistCall__Inputs(this);
  }

  get outputs(): MintArtworkWhitelistCall__Outputs {
    return new MintArtworkWhitelistCall__Outputs(this);
  }
}

export class MintArtworkWhitelistCall__Inputs {
  _call: MintArtworkWhitelistCall;

  constructor(call: MintArtworkWhitelistCall) {
    this._call = call;
  }

  get _traitTokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _saltNonce(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintArtworkWhitelistCall__Outputs {
  _call: MintArtworkWhitelistCall;

  constructor(call: MintArtworkWhitelistCall) {
    this._call = call;
  }
}

export class MintTraitsAndArtworkCall extends ethereum.Call {
  get inputs(): MintTraitsAndArtworkCall__Inputs {
    return new MintTraitsAndArtworkCall__Inputs(this);
  }

  get outputs(): MintTraitsAndArtworkCall__Outputs {
    return new MintTraitsAndArtworkCall__Outputs(this);
  }
}

export class MintTraitsAndArtworkCall__Inputs {
  _call: MintTraitsAndArtworkCall;

  constructor(call: MintTraitsAndArtworkCall) {
    this._call = call;
  }

  get _traitTokenIdsToBuy(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _traitAmountsToBuy(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _traitTokenIdsToCreateArtwork(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _saltNonce(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class MintTraitsAndArtworkCall__Outputs {
  _call: MintTraitsAndArtworkCall;

  constructor(call: MintTraitsAndArtworkCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ReclaimTraitsCall extends ethereum.Call {
  get inputs(): ReclaimTraitsCall__Inputs {
    return new ReclaimTraitsCall__Inputs(this);
  }

  get outputs(): ReclaimTraitsCall__Outputs {
    return new ReclaimTraitsCall__Outputs(this);
  }
}

export class ReclaimTraitsCall__Inputs {
  _call: ReclaimTraitsCall;

  constructor(call: ReclaimTraitsCall) {
    this._call = call;
  }

  get _artworkTokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ReclaimTraitsCall__Outputs {
  _call: ReclaimTraitsCall;

  constructor(call: ReclaimTraitsCall) {
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

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
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

export class SetupCall extends ethereum.Call {
  get inputs(): SetupCall__Inputs {
    return new SetupCall__Inputs(this);
  }

  get outputs(): SetupCall__Outputs {
    return new SetupCall__Outputs(this);
  }
}

export class SetupCall__Inputs {
  _call: SetupCall;

  constructor(call: SetupCall) {
    this._call = call;
  }

  get _data(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SetupCall__Outputs {
  _call: SetupCall;

  constructor(call: SetupCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UpdateWhitelistCall extends ethereum.Call {
  get inputs(): UpdateWhitelistCall__Inputs {
    return new UpdateWhitelistCall__Inputs(this);
  }

  get outputs(): UpdateWhitelistCall__Outputs {
    return new UpdateWhitelistCall__Outputs(this);
  }
}

export class UpdateWhitelistCall__Inputs {
  _call: UpdateWhitelistCall;

  constructor(call: UpdateWhitelistCall) {
    this._call = call;
  }

  get _whitelistStartTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _whitelistAddresses(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _whitelistAmounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class UpdateWhitelistCall__Outputs {
  _call: UpdateWhitelistCall;

  constructor(call: UpdateWhitelistCall) {
    this._call = call;
  }
}
