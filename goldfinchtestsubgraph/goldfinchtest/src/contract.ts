import {
  CreditLineMigrated as CreditLineMigratedEvent,
  DepositMade as DepositMadeEvent,
  DrawdownMade as DrawdownMadeEvent,
  DrawdownsPaused as DrawdownsPausedEvent,
  DrawdownsUnpaused as DrawdownsUnpausedEvent,
  EmergencyShutdown as EmergencyShutdownEvent,
  Paused as PausedEvent,
  PaymentApplied as PaymentAppliedEvent,
  ReserveFundsCollected as ReserveFundsCollectedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SharePriceUpdated as SharePriceUpdatedEvent,
  SliceCreated as SliceCreatedEvent,
  TrancheLocked as TrancheLockedEvent,
  Unpaused as UnpausedEvent,
  WithdrawalMade as WithdrawalMadeEvent
} from "../generated/Contract/Contract"
import {
  CreditLineMigrated,
  DepositMade,
  DrawdownMade,
  DrawdownsPaused,
  DrawdownsUnpaused,
  EmergencyShutdown,
  Paused,
  PaymentApplied,
  ReserveFundsCollected,
  RoleGranted,
  RoleRevoked,
  SharePriceUpdated,
  SliceCreated,
  TrancheLocked,
  Unpaused,
  WithdrawalMade
} from "../generated/schema"

export function handleCreditLineMigrated(event: CreditLineMigratedEvent): void {
  let entity = new CreditLineMigrated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldCreditLine = event.params.oldCreditLine
  entity.newCreditLine = event.params.newCreditLine

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositMade(event: DepositMadeEvent): void {
  let entity = new DepositMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.tranche = event.params.tranche
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDrawdownMade(event: DrawdownMadeEvent): void {
  let entity = new DrawdownMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.borrower = event.params.borrower
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDrawdownsPaused(event: DrawdownsPausedEvent): void {
  let entity = new DrawdownsPaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pool = event.params.pool

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDrawdownsUnpaused(event: DrawdownsUnpausedEvent): void {
  let entity = new DrawdownsUnpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pool = event.params.pool

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyShutdown(event: EmergencyShutdownEvent): void {
  let entity = new EmergencyShutdown(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pool = event.params.pool

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaymentApplied(event: PaymentAppliedEvent): void {
  let entity = new PaymentApplied(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.payer = event.params.payer
  entity.pool = event.params.pool
  entity.interest = event.params.interest
  entity.principal = event.params.principal
  entity.remaining = event.params.remaining
  entity.reserve = event.params.reserve

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReserveFundsCollected(
  event: ReserveFundsCollectedEvent
): void {
  let entity = new ReserveFundsCollected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSharePriceUpdated(event: SharePriceUpdatedEvent): void {
  let entity = new SharePriceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pool = event.params.pool
  entity.tranche = event.params.tranche
  entity.principalSharePrice = event.params.principalSharePrice
  entity.principalDelta = event.params.principalDelta
  entity.interestSharePrice = event.params.interestSharePrice
  entity.interestDelta = event.params.interestDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSliceCreated(event: SliceCreatedEvent): void {
  let entity = new SliceCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pool = event.params.pool
  entity.sliceId = event.params.sliceId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrancheLocked(event: TrancheLockedEvent): void {
  let entity = new TrancheLocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pool = event.params.pool
  entity.trancheId = event.params.trancheId
  entity.lockedUntil = event.params.lockedUntil

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawalMade(event: WithdrawalMadeEvent): void {
  let entity = new WithdrawalMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.tranche = event.params.tranche
  entity.tokenId = event.params.tokenId
  entity.interestWithdrawn = event.params.interestWithdrawn
  entity.principalWithdrawn = event.params.principalWithdrawn

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
