import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/Contract/Contract"

export function createCreditLineMigratedEvent(
  oldCreditLine: Address,
  newCreditLine: Address
): CreditLineMigrated {
  let creditLineMigratedEvent = changetype<CreditLineMigrated>(newMockEvent())

  creditLineMigratedEvent.parameters = new Array()

  creditLineMigratedEvent.parameters.push(
    new ethereum.EventParam(
      "oldCreditLine",
      ethereum.Value.fromAddress(oldCreditLine)
    )
  )
  creditLineMigratedEvent.parameters.push(
    new ethereum.EventParam(
      "newCreditLine",
      ethereum.Value.fromAddress(newCreditLine)
    )
  )

  return creditLineMigratedEvent
}

export function createDepositMadeEvent(
  owner: Address,
  tranche: BigInt,
  tokenId: BigInt,
  amount: BigInt
): DepositMade {
  let depositMadeEvent = changetype<DepositMade>(newMockEvent())

  depositMadeEvent.parameters = new Array()

  depositMadeEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  depositMadeEvent.parameters.push(
    new ethereum.EventParam(
      "tranche",
      ethereum.Value.fromUnsignedBigInt(tranche)
    )
  )
  depositMadeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  depositMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositMadeEvent
}

export function createDrawdownMadeEvent(
  borrower: Address,
  amount: BigInt
): DrawdownMade {
  let drawdownMadeEvent = changetype<DrawdownMade>(newMockEvent())

  drawdownMadeEvent.parameters = new Array()

  drawdownMadeEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  drawdownMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return drawdownMadeEvent
}

export function createDrawdownsPausedEvent(pool: Address): DrawdownsPaused {
  let drawdownsPausedEvent = changetype<DrawdownsPaused>(newMockEvent())

  drawdownsPausedEvent.parameters = new Array()

  drawdownsPausedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )

  return drawdownsPausedEvent
}

export function createDrawdownsUnpausedEvent(pool: Address): DrawdownsUnpaused {
  let drawdownsUnpausedEvent = changetype<DrawdownsUnpaused>(newMockEvent())

  drawdownsUnpausedEvent.parameters = new Array()

  drawdownsUnpausedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )

  return drawdownsUnpausedEvent
}

export function createEmergencyShutdownEvent(pool: Address): EmergencyShutdown {
  let emergencyShutdownEvent = changetype<EmergencyShutdown>(newMockEvent())

  emergencyShutdownEvent.parameters = new Array()

  emergencyShutdownEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )

  return emergencyShutdownEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createPaymentAppliedEvent(
  payer: Address,
  pool: Address,
  interest: BigInt,
  principal: BigInt,
  remaining: BigInt,
  reserve: BigInt
): PaymentApplied {
  let paymentAppliedEvent = changetype<PaymentApplied>(newMockEvent())

  paymentAppliedEvent.parameters = new Array()

  paymentAppliedEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  paymentAppliedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )
  paymentAppliedEvent.parameters.push(
    new ethereum.EventParam(
      "interest",
      ethereum.Value.fromUnsignedBigInt(interest)
    )
  )
  paymentAppliedEvent.parameters.push(
    new ethereum.EventParam(
      "principal",
      ethereum.Value.fromUnsignedBigInt(principal)
    )
  )
  paymentAppliedEvent.parameters.push(
    new ethereum.EventParam(
      "remaining",
      ethereum.Value.fromUnsignedBigInt(remaining)
    )
  )
  paymentAppliedEvent.parameters.push(
    new ethereum.EventParam(
      "reserve",
      ethereum.Value.fromUnsignedBigInt(reserve)
    )
  )

  return paymentAppliedEvent
}

export function createReserveFundsCollectedEvent(
  from: Address,
  amount: BigInt
): ReserveFundsCollected {
  let reserveFundsCollectedEvent = changetype<ReserveFundsCollected>(
    newMockEvent()
  )

  reserveFundsCollectedEvent.parameters = new Array()

  reserveFundsCollectedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  reserveFundsCollectedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return reserveFundsCollectedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSharePriceUpdatedEvent(
  pool: Address,
  tranche: BigInt,
  principalSharePrice: BigInt,
  principalDelta: BigInt,
  interestSharePrice: BigInt,
  interestDelta: BigInt
): SharePriceUpdated {
  let sharePriceUpdatedEvent = changetype<SharePriceUpdated>(newMockEvent())

  sharePriceUpdatedEvent.parameters = new Array()

  sharePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )
  sharePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tranche",
      ethereum.Value.fromUnsignedBigInt(tranche)
    )
  )
  sharePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "principalSharePrice",
      ethereum.Value.fromUnsignedBigInt(principalSharePrice)
    )
  )
  sharePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "principalDelta",
      ethereum.Value.fromSignedBigInt(principalDelta)
    )
  )
  sharePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "interestSharePrice",
      ethereum.Value.fromUnsignedBigInt(interestSharePrice)
    )
  )
  sharePriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "interestDelta",
      ethereum.Value.fromSignedBigInt(interestDelta)
    )
  )

  return sharePriceUpdatedEvent
}

export function createSliceCreatedEvent(
  pool: Address,
  sliceId: BigInt
): SliceCreated {
  let sliceCreatedEvent = changetype<SliceCreated>(newMockEvent())

  sliceCreatedEvent.parameters = new Array()

  sliceCreatedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )
  sliceCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "sliceId",
      ethereum.Value.fromUnsignedBigInt(sliceId)
    )
  )

  return sliceCreatedEvent
}

export function createTrancheLockedEvent(
  pool: Address,
  trancheId: BigInt,
  lockedUntil: BigInt
): TrancheLocked {
  let trancheLockedEvent = changetype<TrancheLocked>(newMockEvent())

  trancheLockedEvent.parameters = new Array()

  trancheLockedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )
  trancheLockedEvent.parameters.push(
    new ethereum.EventParam(
      "trancheId",
      ethereum.Value.fromUnsignedBigInt(trancheId)
    )
  )
  trancheLockedEvent.parameters.push(
    new ethereum.EventParam(
      "lockedUntil",
      ethereum.Value.fromUnsignedBigInt(lockedUntil)
    )
  )

  return trancheLockedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createWithdrawalMadeEvent(
  owner: Address,
  tranche: BigInt,
  tokenId: BigInt,
  interestWithdrawn: BigInt,
  principalWithdrawn: BigInt
): WithdrawalMade {
  let withdrawalMadeEvent = changetype<WithdrawalMade>(newMockEvent())

  withdrawalMadeEvent.parameters = new Array()

  withdrawalMadeEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  withdrawalMadeEvent.parameters.push(
    new ethereum.EventParam(
      "tranche",
      ethereum.Value.fromUnsignedBigInt(tranche)
    )
  )
  withdrawalMadeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  withdrawalMadeEvent.parameters.push(
    new ethereum.EventParam(
      "interestWithdrawn",
      ethereum.Value.fromUnsignedBigInt(interestWithdrawn)
    )
  )
  withdrawalMadeEvent.parameters.push(
    new ethereum.EventParam(
      "principalWithdrawn",
      ethereum.Value.fromUnsignedBigInt(principalWithdrawn)
    )
  )

  return withdrawalMadeEvent
}
