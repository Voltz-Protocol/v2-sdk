import { BigNumber } from 'ethers';

export const MaxUint256Bn = BigNumber.from(
  '115792089237316195423570985008687907853269984665640564039457584007913129639935',
);

export const TresholdApprovalBn = BigNumber.from(
  '6277101735386680763835789423207666416102355444464034512896',
);

export const MIN_TICK = -69100; // min tick that could be used on any pool
export const MAX_TICK = 69100; // max tick that could be used on any pool

export const MIN_FIXED_RATE = 0.001; // min fixed rate that could be used on any pool
export const MAX_FIXED_RATE = 1001; // max fixed rate that could be used on any pool

export const ONE_DAY_IN_SECONDS = 86400;
export const ONE_WEEK_IN_SECONDS = 604800;
export const ONE_YEAR_IN_SECONDS = 31536000;

export const ZERO_BN = BigNumber.from(0);
export const WAD = BigNumber.from(10).pow(18);

export const TRADER_TICKS = [-69060, 0];
export const BORROWER_TICKS = [-69000, 69060];
