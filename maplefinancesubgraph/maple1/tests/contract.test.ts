import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { DefaultVersionSet } from "../generated/schema"
import { DefaultVersionSet as DefaultVersionSetEvent } from "../generated/Contract/Contract"
import { handleDefaultVersionSet } from "../src/contract"
import { createDefaultVersionSetEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let version_ = BigInt.fromI32(234)
    let newDefaultVersionSetEvent = createDefaultVersionSetEvent(version_)
    handleDefaultVersionSet(newDefaultVersionSetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DefaultVersionSet created and stored", () => {
    assert.entityCount("DefaultVersionSet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DefaultVersionSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "version_",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
