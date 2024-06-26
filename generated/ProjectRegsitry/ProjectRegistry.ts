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

export class AdminAdded extends ethereum.Event {
  get params(): AdminAdded__Params {
    return new AdminAdded__Params(this);
  }
}

export class AdminAdded__Params {
  _event: AdminAdded;

  constructor(event: AdminAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class AdminRemoved extends ethereum.Event {
  get params(): AdminRemoved__Params {
    return new AdminRemoved__Params(this);
  }
}

export class AdminRemoved__Params {
  _event: AdminRemoved;

  constructor(event: AdminRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BaseURIUpdated extends ethereum.Event {
  get params(): BaseURIUpdated__Params {
    return new BaseURIUpdated__Params(this);
  }
}

export class BaseURIUpdated__Params {
  _event: BaseURIUpdated;

  constructor(event: BaseURIUpdated) {
    this._event = event;
  }

  get baseURI(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class OwnershipTransferStarted extends ethereum.Event {
  get params(): OwnershipTransferStarted__Params {
    return new OwnershipTransferStarted__Params(this);
  }
}

export class OwnershipTransferStarted__Params {
  _event: OwnershipTransferStarted;

  constructor(event: OwnershipTransferStarted) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
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

export class ProjectDeregistered extends ethereum.Event {
  get params(): ProjectDeregistered__Params {
    return new ProjectDeregistered__Params(this);
  }
}

export class ProjectDeregistered__Params {
  _event: ProjectDeregistered;

  constructor(event: ProjectDeregistered) {
    this._event = event;
  }

  get projectId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ProjectRegistered extends ethereum.Event {
  get params(): ProjectRegistered__Params {
    return new ProjectRegistered__Params(this);
  }
}

export class ProjectRegistered__Params {
  _event: ProjectRegistered;

  constructor(event: ProjectRegistered) {
    this._event = event;
  }

  get projectId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get artwork(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get traits(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ProjectRegistry__projectsResult {
  value0: Address;
  value1: Address;

  constructor(value0: Address, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }

  getArtwork(): Address {
    return this.value0;
  }

  getTraits(): Address {
    return this.value1;
  }
}

export class ProjectRegistry extends ethereum.SmartContract {
  static bind(address: Address): ProjectRegistry {
    return new ProjectRegistry("ProjectRegistry", address);
  }

  admins(param0: Address): boolean {
    let result = super.call("admins", "admins(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_admins(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("admins", "admins(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  baseURI(): string {
    let result = super.call("baseURI", "baseURI():(string)", []);

    return result[0].toString();
  }

  try_baseURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURI", "baseURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  pendingOwner(): Address {
    let result = super.call("pendingOwner", "pendingOwner():(address)", []);

    return result[0].toAddress();
  }

  try_pendingOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingOwner", "pendingOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  projectCount(): BigInt {
    let result = super.call("projectCount", "projectCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_projectCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("projectCount", "projectCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  projects(param0: BigInt): ProjectRegistry__projectsResult {
    let result = super.call("projects", "projects(uint256):(address,address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return new ProjectRegistry__projectsResult(
      result[0].toAddress(),
      result[1].toAddress()
    );
  }

  try_projects(
    param0: BigInt
  ): ethereum.CallResult<ProjectRegistry__projectsResult> {
    let result = super.tryCall(
      "projects",
      "projects(uint256):(address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ProjectRegistry__projectsResult(
        value[0].toAddress(),
        value[1].toAddress()
      )
    );
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

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _admins(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _baseURI(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends ethereum.Call {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AddAdminsCall extends ethereum.Call {
  get inputs(): AddAdminsCall__Inputs {
    return new AddAdminsCall__Inputs(this);
  }

  get outputs(): AddAdminsCall__Outputs {
    return new AddAdminsCall__Outputs(this);
  }
}

export class AddAdminsCall__Inputs {
  _call: AddAdminsCall;

  constructor(call: AddAdminsCall) {
    this._call = call;
  }

  get _admins(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class AddAdminsCall__Outputs {
  _call: AddAdminsCall;

  constructor(call: AddAdminsCall) {
    this._call = call;
  }
}

export class DeregisterProjectCall extends ethereum.Call {
  get inputs(): DeregisterProjectCall__Inputs {
    return new DeregisterProjectCall__Inputs(this);
  }

  get outputs(): DeregisterProjectCall__Outputs {
    return new DeregisterProjectCall__Outputs(this);
  }
}

export class DeregisterProjectCall__Inputs {
  _call: DeregisterProjectCall;

  constructor(call: DeregisterProjectCall) {
    this._call = call;
  }

  get _projectId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeregisterProjectCall__Outputs {
  _call: DeregisterProjectCall;

  constructor(call: DeregisterProjectCall) {
    this._call = call;
  }
}

export class ExecuteCall extends ethereum.Call {
  get inputs(): ExecuteCall__Inputs {
    return new ExecuteCall__Inputs(this);
  }

  get outputs(): ExecuteCall__Outputs {
    return new ExecuteCall__Outputs(this);
  }
}

export class ExecuteCall__Inputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get _targets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _values(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _calldatas(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }
}

export class RegisterProjectCall extends ethereum.Call {
  get inputs(): RegisterProjectCall__Inputs {
    return new RegisterProjectCall__Inputs(this);
  }

  get outputs(): RegisterProjectCall__Outputs {
    return new RegisterProjectCall__Outputs(this);
  }
}

export class RegisterProjectCall__Inputs {
  _call: RegisterProjectCall;

  constructor(call: RegisterProjectCall) {
    this._call = call;
  }

  get _artwork(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _artworkData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _traits(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _traitsData(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class RegisterProjectCall__Outputs {
  _call: RegisterProjectCall;

  constructor(call: RegisterProjectCall) {
    this._call = call;
  }
}

export class RemoveAdminsCall extends ethereum.Call {
  get inputs(): RemoveAdminsCall__Inputs {
    return new RemoveAdminsCall__Inputs(this);
  }

  get outputs(): RemoveAdminsCall__Outputs {
    return new RemoveAdminsCall__Outputs(this);
  }
}

export class RemoveAdminsCall__Inputs {
  _call: RemoveAdminsCall;

  constructor(call: RemoveAdminsCall) {
    this._call = call;
  }

  get _admins(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class RemoveAdminsCall__Outputs {
  _call: RemoveAdminsCall;

  constructor(call: RemoveAdminsCall) {
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

export class UpdateBaseURICall extends ethereum.Call {
  get inputs(): UpdateBaseURICall__Inputs {
    return new UpdateBaseURICall__Inputs(this);
  }

  get outputs(): UpdateBaseURICall__Outputs {
    return new UpdateBaseURICall__Outputs(this);
  }
}

export class UpdateBaseURICall__Inputs {
  _call: UpdateBaseURICall;

  constructor(call: UpdateBaseURICall) {
    this._call = call;
  }

  get _baseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class UpdateBaseURICall__Outputs {
  _call: UpdateBaseURICall;

  constructor(call: UpdateBaseURICall) {
    this._call = call;
  }
}
