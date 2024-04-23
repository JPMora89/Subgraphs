import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { CreditLineMigrated } from "../generated/schema"
import { CreditLineMigrated as CreditLineMigratedEvent } from "../generated/Contract/Contract"
import { handleCreditLineMigrated } from "../src/contract"
import { createCreditLineMigratedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let oldCreditLine = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newCreditLine = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newCreditLineMigratedEvent = createCreditLineMigratedEvent(
      oldCreditLine,
      newCreditLine
    )
    handleCreditLineMigrated(newCreditLineMigratedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CreditLineMigrated created and stored", () => {
    assert.entityCount("CreditLineMigrated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CreditLineMigrated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "oldCreditLine",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CreditLineMigrated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newCreditLine",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
