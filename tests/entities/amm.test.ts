/* eslint-disable no-restricted-syntax */

import { before, describe, it } from 'mocha';
import { expect } from 'chai';

import { Wallet } from 'ethers';
import { isUndefined } from 'lodash';

import { waffle } from 'hardhat';
import * as mainnetPools from '../../pool-addresses/mainnet.json';
import { getMaxAvailableNotional } from '../../src/services/getMaxAvailableNotional';
import { getAMM } from '../utils/getAMM';
import { fail } from '../utils/utils';
import { AMM } from '../../src/entities/AMM/amm';

const { provider } = waffle;

describe('amm', () => {
  const POOLS = ['aUSDC_v3', 'cDAI_v3', 'stETH_v1', 'rETH_v1'];
  const signer = new Wallet(
    '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    provider,
  ); // at address - 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  const amms = new Map<string, AMM>();

  before(async () => {
    for (const poolName of POOLS) {
      const item = mainnetPools[poolName as keyof typeof mainnetPools];
      const amm = await getAMM({
        vammAddress: item.vamm,
        provider,
        signer,
      });

      amms.set(poolName, amm);
    }
  });

  POOLS.forEach((poolName) => {
    it(`initialisation ${poolName}`, () => {
      const amm = amms.get(poolName);
      if (isUndefined(amm)) {
        fail();
        return;
      }

      const item = mainnetPools[poolName as keyof typeof mainnetPools];

      expect(amm.readOnlyContracts?.marginEngine.address).to.be.eq(item.marginEngine);
      expect(amm.tokenDecimals).to.be.eq(item.decimals);
      expect(amm.rateOracleID).to.be.eq(item.rateOracleID);
      expect(amm.userAddress).to.be.eq('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
    });
  });

  POOLS.forEach(async (poolName) => {
    it(`approve operation on ${poolName}`, async () => {
      const amm = amms.get(poolName);
      if (isUndefined(amm)) {
        fail();
        return;
      }

      await amm.approve();
      expect(amm.approval).to.be.eq(true);
    });
  });

  it('swap', async () => {
    const amm = amms.get('stETH_v1');
    if (isUndefined(amm)) {
      fail();
      return;
    }

    const swapArgs = {
      isFT: true,
      notional: 10,
      fixedLow: 1,
      fixedHigh: 2,
      margin: 1,
    };

    const swapInfo0 = await amm.getSwapInfo(swapArgs);
    const balance0 = amm.walletBalance;

    expect(swapInfo0?.availableNotional).to.be.eq(10);

    await amm.swap(swapArgs);

    const swapInfo1 = await amm.getSwapInfo(swapArgs);
    const balance1 = amm.walletBalance;

    expect(swapInfo1?.maxAvailableNotional).to.be.eq(
      (swapInfo0?.maxAvailableNotional ?? 0) - swapArgs.notional,
    );
    expect(balance1).to.be.lessThanOrEqual((balance0 ?? 0) - swapArgs.margin);
  });

  it('swap - full collateralisation', async () => {
    const amm = amms.get('stETH_v1');
    if (isUndefined(amm)) {
      fail();
      return;
    }

    const swapArgs = {
      isFT: false,
      notional: 10,
      fixedLow: 1,
      fixedHigh: 2,
      margin: 1,
    };

    const swapInfo0 = await amm.getSwapInfo(swapArgs);
    const balance0 = amm.walletBalance;

    expect(swapInfo0?.availableNotional).to.be.eq(10);

    await amm.swap({
      ...swapArgs,
      force: {
        fullCollateralisation: true,
      },
    });

    const swapInfo1 = await amm.getSwapInfo(swapArgs);
    const balance1 = amm.walletBalance;

    expect(swapInfo1?.maxAvailableNotional).to.be.eq(
      (swapInfo0?.maxAvailableNotional ?? 0) - swapArgs.notional,
    );
    expect(balance1).to.be.lessThanOrEqual((balance0 ?? 0) - swapArgs.margin);
  });

  it('mint', async () => {
    const amm = amms.get('stETH_v1');
    if (isUndefined(amm)) {
      fail();
      return;
    }

    const mintArgs = {
      isMint: true,
      notional: 10,
      fixedLow: 1,
      fixedHigh: 4,
      margin: 1,
    };

    if (isUndefined(amm.readOnlyContracts)) {
      expect(true).to.be.eq(false);
      return;
    }

    // get information before Mint
    await amm.getMintOrBurnInfo(mintArgs);
    const availableFT0 = await getMaxAvailableNotional({
      periphery: amm.readOnlyContracts.periphery,
      marginEngineAddress: amm.readOnlyContracts.marginEngine.address,
      isFT: true,
      tokenScaler: amm.tokenScaler,
      tokenDescaler: amm.tokenDescaler,
    });
    const balance0 = amm.walletBalance;

    // execute Mint
    await amm.mintOrBurn(mintArgs);

    // get information after Mint
    await amm.getMintOrBurnInfo(mintArgs);
    const availableFT1 = await getMaxAvailableNotional({
      periphery: amm.readOnlyContracts.periphery,
      marginEngineAddress: amm.readOnlyContracts.marginEngine.address,
      isFT: true,
      tokenScaler: amm.tokenScaler,
      tokenDescaler: amm.tokenDescaler,
    });
    const balance1 = amm.walletBalance;

    // checks
    expect(availableFT1).to.be.eq(availableFT0 + 10);
    expect(balance1).to.be.lessThanOrEqual((balance0 ?? 0) - mintArgs.margin);
  });

  it('burn', async () => {
    const amm = amms.get('stETH_v1');
    if (isUndefined(amm)) {
      fail();
      return;
    }

    const burnArgs = {
      isMint: false,
      notional: 10,
      fixedLow: 1,
      fixedHigh: 4,
      margin: -0.5,
    };

    if (isUndefined(amm.readOnlyContracts)) {
      expect(true).to.be.eq(false);
      return;
    }

    // get information before Burn
    await amm.getMintOrBurnInfo(burnArgs);
    const availableFT0 = await getMaxAvailableNotional({
      periphery: amm.readOnlyContracts.periphery,
      marginEngineAddress: amm.readOnlyContracts.marginEngine.address,
      isFT: true,
      tokenScaler: amm.tokenScaler,
      tokenDescaler: amm.tokenDescaler,
    });
    const balance0 = amm.walletBalance;

    // execute Burn
    await amm.mintOrBurn(burnArgs);

    // get information after Burn
    await amm.getMintOrBurnInfo(burnArgs);
    const availableFT1 = await getMaxAvailableNotional({
      periphery: amm.readOnlyContracts.periphery,
      marginEngineAddress: amm.readOnlyContracts.marginEngine.address,
      isFT: true,
      tokenScaler: amm.tokenScaler,
      tokenDescaler: amm.tokenDescaler,
    });
    const balance1 = amm.walletBalance;

    // checks
    expect(availableFT1).to.be.eq(availableFT0 - 10);
    expect(balance1).to.be.lessThanOrEqual((balance0 ?? 0) - burnArgs.margin);
  });

  it('update margin', async () => {
    const amm = amms.get('stETH_v1');
    if (isUndefined(amm)) {
      fail();
      return;
    }

    const updateMarginArgs = {
      fixedLow: 1,
      fixedHigh: 4,
      margin: 0.5,
    };

    if (isUndefined(amm.readOnlyContracts)) {
      expect(true).to.be.eq(false);
      return;
    }

    // get information before Update Margin
    const balance0 = amm.walletBalance;

    // execute Update Margin
    await amm.updateMargin(updateMarginArgs);

    // get information after Update Margin
    const balance1 = amm.walletBalance;

    // checks
    expect(balance1).to.be.lessThanOrEqual((balance0 ?? 0) - updateMarginArgs.margin);
  });

  it('attemp to settle', async () => {
    const amm = amms.get('stETH_v1');
    if (isUndefined(amm)) {
      fail();
      return;
    }

    const settleArgs = {
      fixedLow: 1,
      fixedHigh: 4,
    };

    try {
      await amm.settle(settleArgs);
      fail();
    } catch (error) {
      expect((error as Error).message).to.be.eq('Cannot settle before maturity');
    }
  });

  it('attemp to rollover with mint', async () => {
    const amm = amms.get('stETH_v1');
    if (isUndefined(amm)) {
      fail();
      return;
    }

    const rolloverWithMintArgs = {
      isMint: true,
      notional: 10,
      marginErc20: 0,
      marginEth: 1,
      fixedLow: 1,
      fixedHigh: 2,
      marginEngine: amm.marginEngineAddress,

      previousFixedLow: 1,
      previousFixedHigh: 4,
    };

    try {
      await amm.rolloverWithMint(rolloverWithMintArgs);
      fail();
    } catch (error) {
      expect((error as Error).message).to.be.eq('Cannot settle before maturity');
    }
  });

  it('attemp to rollover with swap', async () => {
    const amm = amms.get('stETH_v1');
    if (isUndefined(amm)) {
      fail();
      return;
    }

    const rolloverWithSwapArgs = {
      isFT: true,
      notional: 10,
      marginErc20: 0,
      marginEth: 1,
      fixedLow: 1,
      fixedHigh: 2,
      marginEngine: amm.marginEngineAddress,

      previousFixedLow: 1,
      previousFixedHigh: 4,
    };

    try {
      await amm.rolloverWithSwap(rolloverWithSwapArgs);
      fail();
    } catch (error) {
      expect((error as Error).message).to.be.eq('Cannot settle before maturity');
    }
  });
});
