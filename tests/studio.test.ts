import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { StudioApproval } from "../generated/schema"
import { StudioApproval as StudioApprovalEvent } from "../generated/Studio/Studio"
import { handleStudioApproval } from "../src/studio"
import { createStudioApprovalEvent } from "./studio-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let approved = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let newStudioApprovalEvent = createStudioApprovalEvent(
      owner,
      approved,
      tokenId
    )
    handleStudioApproval(newStudioApprovalEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("StudioApproval created and stored", () => {
    assert.entityCount("StudioApproval", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "StudioApproval",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "StudioApproval",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "approved",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "StudioApproval",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
