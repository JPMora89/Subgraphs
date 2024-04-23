import {
  DefaultVersionSet as DefaultVersionSetEvent,
  ImplementationRegistered as ImplementationRegisteredEvent,
  InstanceDeployed as InstanceDeployedEvent,
  InstanceUpgraded as InstanceUpgradedEvent,
  MapleGlobalsSet as MapleGlobalsSetEvent,
  UpgradePathDisabled as UpgradePathDisabledEvent,
  UpgradePathEnabled as UpgradePathEnabledEvent
} from "../generated/Contract/Contract"
import {
  DefaultVersionSet,
  ImplementationRegistered,
  InstanceDeployed,
  InstanceUpgraded,
  MapleGlobalsSet,
  UpgradePathDisabled,
  UpgradePathEnabled
} from "../generated/schema"

export function handleDefaultVersionSet(event: DefaultVersionSetEvent): void {
  let entity = new DefaultVersionSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version_ = event.params.version_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleImplementationRegistered(
  event: ImplementationRegisteredEvent
): void {
  let entity = new ImplementationRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version_ = event.params.version_
  entity.implementationAddress_ = event.params.implementationAddress_
  entity.initializer_ = event.params.initializer_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInstanceDeployed(event: InstanceDeployedEvent): void {
  let entity = new InstanceDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version_ = event.params.version_
  entity.instance_ = event.params.instance_
  entity.initializationArguments_ = event.params.initializationArguments_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInstanceUpgraded(event: InstanceUpgradedEvent): void {
  let entity = new InstanceUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.instance_ = event.params.instance_
  entity.fromVersion_ = event.params.fromVersion_
  entity.toVersion_ = event.params.toVersion_
  entity.migrationArguments_ = event.params.migrationArguments_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMapleGlobalsSet(event: MapleGlobalsSetEvent): void {
  let entity = new MapleGlobalsSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mapleGlobals_ = event.params.mapleGlobals_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgradePathDisabled(
  event: UpgradePathDisabledEvent
): void {
  let entity = new UpgradePathDisabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fromVersion_ = event.params.fromVersion_
  entity.toVersion_ = event.params.toVersion_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgradePathEnabled(event: UpgradePathEnabledEvent): void {
  let entity = new UpgradePathEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fromVersion_ = event.params.fromVersion_
  entity.toVersion_ = event.params.toVersion_
  entity.migrator_ = event.params.migrator_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
