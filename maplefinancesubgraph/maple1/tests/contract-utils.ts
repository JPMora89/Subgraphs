import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  DefaultVersionSet,
  ImplementationRegistered,
  InstanceDeployed,
  InstanceUpgraded,
  MapleGlobalsSet,
  UpgradePathDisabled,
  UpgradePathEnabled
} from "../generated/Contract/Contract"

export function createDefaultVersionSetEvent(
  version_: BigInt
): DefaultVersionSet {
  let defaultVersionSetEvent = changetype<DefaultVersionSet>(newMockEvent())

  defaultVersionSetEvent.parameters = new Array()

  defaultVersionSetEvent.parameters.push(
    new ethereum.EventParam(
      "version_",
      ethereum.Value.fromUnsignedBigInt(version_)
    )
  )

  return defaultVersionSetEvent
}

export function createImplementationRegisteredEvent(
  version_: BigInt,
  implementationAddress_: Address,
  initializer_: Address
): ImplementationRegistered {
  let implementationRegisteredEvent = changetype<ImplementationRegistered>(
    newMockEvent()
  )

  implementationRegisteredEvent.parameters = new Array()

  implementationRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "version_",
      ethereum.Value.fromUnsignedBigInt(version_)
    )
  )
  implementationRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "implementationAddress_",
      ethereum.Value.fromAddress(implementationAddress_)
    )
  )
  implementationRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "initializer_",
      ethereum.Value.fromAddress(initializer_)
    )
  )

  return implementationRegisteredEvent
}

export function createInstanceDeployedEvent(
  version_: BigInt,
  instance_: Address,
  initializationArguments_: Bytes
): InstanceDeployed {
  let instanceDeployedEvent = changetype<InstanceDeployed>(newMockEvent())

  instanceDeployedEvent.parameters = new Array()

  instanceDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "version_",
      ethereum.Value.fromUnsignedBigInt(version_)
    )
  )
  instanceDeployedEvent.parameters.push(
    new ethereum.EventParam("instance_", ethereum.Value.fromAddress(instance_))
  )
  instanceDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "initializationArguments_",
      ethereum.Value.fromBytes(initializationArguments_)
    )
  )

  return instanceDeployedEvent
}

export function createInstanceUpgradedEvent(
  instance_: Address,
  fromVersion_: BigInt,
  toVersion_: BigInt,
  migrationArguments_: Bytes
): InstanceUpgraded {
  let instanceUpgradedEvent = changetype<InstanceUpgraded>(newMockEvent())

  instanceUpgradedEvent.parameters = new Array()

  instanceUpgradedEvent.parameters.push(
    new ethereum.EventParam("instance_", ethereum.Value.fromAddress(instance_))
  )
  instanceUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "fromVersion_",
      ethereum.Value.fromUnsignedBigInt(fromVersion_)
    )
  )
  instanceUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "toVersion_",
      ethereum.Value.fromUnsignedBigInt(toVersion_)
    )
  )
  instanceUpgradedEvent.parameters.push(
    new ethereum.EventParam(
      "migrationArguments_",
      ethereum.Value.fromBytes(migrationArguments_)
    )
  )

  return instanceUpgradedEvent
}

export function createMapleGlobalsSetEvent(
  mapleGlobals_: Address
): MapleGlobalsSet {
  let mapleGlobalsSetEvent = changetype<MapleGlobalsSet>(newMockEvent())

  mapleGlobalsSetEvent.parameters = new Array()

  mapleGlobalsSetEvent.parameters.push(
    new ethereum.EventParam(
      "mapleGlobals_",
      ethereum.Value.fromAddress(mapleGlobals_)
    )
  )

  return mapleGlobalsSetEvent
}

export function createUpgradePathDisabledEvent(
  fromVersion_: BigInt,
  toVersion_: BigInt
): UpgradePathDisabled {
  let upgradePathDisabledEvent = changetype<UpgradePathDisabled>(newMockEvent())

  upgradePathDisabledEvent.parameters = new Array()

  upgradePathDisabledEvent.parameters.push(
    new ethereum.EventParam(
      "fromVersion_",
      ethereum.Value.fromUnsignedBigInt(fromVersion_)
    )
  )
  upgradePathDisabledEvent.parameters.push(
    new ethereum.EventParam(
      "toVersion_",
      ethereum.Value.fromUnsignedBigInt(toVersion_)
    )
  )

  return upgradePathDisabledEvent
}

export function createUpgradePathEnabledEvent(
  fromVersion_: BigInt,
  toVersion_: BigInt,
  migrator_: Address
): UpgradePathEnabled {
  let upgradePathEnabledEvent = changetype<UpgradePathEnabled>(newMockEvent())

  upgradePathEnabledEvent.parameters = new Array()

  upgradePathEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "fromVersion_",
      ethereum.Value.fromUnsignedBigInt(fromVersion_)
    )
  )
  upgradePathEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "toVersion_",
      ethereum.Value.fromUnsignedBigInt(toVersion_)
    )
  )
  upgradePathEnabledEvent.parameters.push(
    new ethereum.EventParam("migrator_", ethereum.Value.fromAddress(migrator_))
  )

  return upgradePathEnabledEvent
}
