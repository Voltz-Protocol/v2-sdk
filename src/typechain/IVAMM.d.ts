/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IVAMMInterface extends ethers.utils.Interface {
  functions: {
    "burn(address,int24,int24,uint128)": FunctionFragment;
    "computeGrowthInside(int24,int24)": FunctionFragment;
    "factory()": FunctionFragment;
    "feeGrowthGlobalX128()": FunctionFragment;
    "feeWad()": FunctionFragment;
    "fixedTokenGrowthGlobalX128()": FunctionFragment;
    "initialize(address,int24)": FunctionFragment;
    "initializeVAMM(uint160)": FunctionFragment;
    "liquidity()": FunctionFragment;
    "marginEngine()": FunctionFragment;
    "maxLiquidityPerTick()": FunctionFragment;
    "mint(address,int24,int24,uint128)": FunctionFragment;
    "protocolFees()": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "setFeeProtocol(uint8)": FunctionFragment;
    "swap((address,int256,uint160,int24,int24))": FunctionFragment;
    "tickBitmap(int16)": FunctionFragment;
    "tickSpacing()": FunctionFragment;
    "ticks(int24)": FunctionFragment;
    "updateProtocolFees(uint256)": FunctionFragment;
    "vammVars()": FunctionFragment;
    "variableTokenGrowthGlobalX128()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "computeGrowthInside",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeGrowthGlobalX128",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeWad", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fixedTokenGrowthGlobalX128",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeVAMM",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "marginEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxLiquidityPerTick",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeProtocol",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tickBitmap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tickSpacing",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "updateProtocolFees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vammVars", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "variableTokenGrowthGlobalX128",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "computeGrowthInside",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeGrowthGlobalX128",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeWad", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fixedTokenGrowthGlobalX128",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeVAMM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marginEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxLiquidityPerTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tickBitmap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tickSpacing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateProtocolFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vammVars", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "variableTokenGrowthGlobalX128",
    data: BytesLike
  ): Result;

  events: {
    "Burn(address,address,int24,int24,uint128)": EventFragment;
    "FeeSet(uint256,uint256)": EventFragment;
    "InitializeVAMM(uint160,int24)": EventFragment;
    "Mint(address,address,int24,int24,uint128)": EventFragment;
    "SetFeeProtocol(uint8,uint8)": EventFragment;
    "Swap(address,address,uint160,uint128,int24,int24,int24)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InitializeVAMM"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeeProtocol"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export type BurnEvent = TypedEvent<
  [string, string, number, number, BigNumber] & {
    sender: string;
    owner: string;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
  }
>;

export type FeeSetEvent = TypedEvent<
  [BigNumber, BigNumber] & { feeWadOld: BigNumber; feeWad: BigNumber }
>;

export type InitializeVAMMEvent = TypedEvent<
  [BigNumber, number] & { sqrtPriceX96: BigNumber; tick: number }
>;

export type MintEvent = TypedEvent<
  [string, string, number, number, BigNumber] & {
    sender: string;
    owner: string;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
  }
>;

export type SetFeeProtocolEvent = TypedEvent<
  [number, number] & { feeProtocolOld: number; feeProtocol: number }
>;

export type SwapEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, number, number, number] & {
    sender: string;
    recipient: string;
    sqrtPriceX96: BigNumber;
    liquidity: BigNumber;
    tick: number;
    tickLower: number;
    tickUpper: number;
  }
>;

export class IVAMM extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IVAMMInterface;

  functions: {
    burn(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    computeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        fixedTokenGrowthInsideX128: BigNumber;
        variableTokenGrowthInsideX128: BigNumber;
        feeGrowthInsideX128: BigNumber;
      }
    >;

    factory(overrides?: CallOverrides): Promise<[string]>;

    feeGrowthGlobalX128(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeWad(overrides?: CallOverrides): Promise<[BigNumber]>;

    fixedTokenGrowthGlobalX128(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _marginEngineAddress: string,
      _tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeVAMM(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    marginEngine(overrides?: CallOverrides): Promise<[string]>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    protocolFees(overrides?: CallOverrides): Promise<[BigNumber]>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeProtocol(
      feeProtocol: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tickSpacing(overrides?: CallOverrides): Promise<[number]>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
          liquidityGross: BigNumber;
          liquidityNet: BigNumber;
          fixedTokenGrowthOutsideX128: BigNumber;
          variableTokenGrowthOutsideX128: BigNumber;
          feeGrowthOutsideX128: BigNumber;
          initialized: boolean;
        }
      ]
    >;

    updateProtocolFees(
      protocolFeesCollected: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vammVars(
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, number, number] & {
          sqrtPriceX96: BigNumber;
          tick: number;
          feeProtocol: number;
        }
      ]
    >;

    variableTokenGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  burn(
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  computeGrowthInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      fixedTokenGrowthInsideX128: BigNumber;
      variableTokenGrowthInsideX128: BigNumber;
      feeGrowthInsideX128: BigNumber;
    }
  >;

  factory(overrides?: CallOverrides): Promise<string>;

  feeGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

  feeWad(overrides?: CallOverrides): Promise<BigNumber>;

  fixedTokenGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _marginEngineAddress: string,
    _tickSpacing: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeVAMM(
    sqrtPriceX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidity(overrides?: CallOverrides): Promise<BigNumber>;

  marginEngine(overrides?: CallOverrides): Promise<string>;

  maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  protocolFees(overrides?: CallOverrides): Promise<BigNumber>;

  setFee(
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeProtocol(
    feeProtocol: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    params: {
      recipient: string;
      amountSpecified: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tickBitmap(
    wordPosition: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tickSpacing(overrides?: CallOverrides): Promise<number>;

  ticks(
    tick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
      liquidityGross: BigNumber;
      liquidityNet: BigNumber;
      fixedTokenGrowthOutsideX128: BigNumber;
      variableTokenGrowthOutsideX128: BigNumber;
      feeGrowthOutsideX128: BigNumber;
      initialized: boolean;
    }
  >;

  updateProtocolFees(
    protocolFeesCollected: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vammVars(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number] & {
      sqrtPriceX96: BigNumber;
      tick: number;
      feeProtocol: number;
    }
  >;

  variableTokenGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    burn(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        fixedTokenGrowthInsideX128: BigNumber;
        variableTokenGrowthInsideX128: BigNumber;
        feeGrowthInsideX128: BigNumber;
      }
    >;

    factory(overrides?: CallOverrides): Promise<string>;

    feeGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    feeWad(overrides?: CallOverrides): Promise<BigNumber>;

    fixedTokenGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _marginEngineAddress: string,
      _tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeVAMM(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    marginEngine(overrides?: CallOverrides): Promise<string>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protocolFees(overrides?: CallOverrides): Promise<BigNumber>;

    setFee(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setFeeProtocol(
      feeProtocol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        _fixedTokenDelta: BigNumber;
        _variableTokenDelta: BigNumber;
        _cumulativeFeeIncurred: BigNumber;
        _fixedTokenDeltaUnbalanced: BigNumber;
        _marginRequirement: BigNumber;
      }
    >;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<number>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        fixedTokenGrowthOutsideX128: BigNumber;
        variableTokenGrowthOutsideX128: BigNumber;
        feeGrowthOutsideX128: BigNumber;
        initialized: boolean;
      }
    >;

    updateProtocolFees(
      protocolFeesCollected: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vammVars(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        feeProtocol: number;
      }
    >;

    variableTokenGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Burn(address,address,int24,int24,uint128)"(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, number, number, BigNumber],
      {
        sender: string;
        owner: string;
        tickLower: number;
        tickUpper: number;
        amount: BigNumber;
      }
    >;

    Burn(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, number, number, BigNumber],
      {
        sender: string;
        owner: string;
        tickLower: number;
        tickUpper: number;
        amount: BigNumber;
      }
    >;

    "FeeSet(uint256,uint256)"(
      feeWadOld?: null,
      feeWad?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { feeWadOld: BigNumber; feeWad: BigNumber }
    >;

    FeeSet(
      feeWadOld?: null,
      feeWad?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { feeWadOld: BigNumber; feeWad: BigNumber }
    >;

    "InitializeVAMM(uint160,int24)"(
      sqrtPriceX96?: null,
      tick?: null
    ): TypedEventFilter<
      [BigNumber, number],
      { sqrtPriceX96: BigNumber; tick: number }
    >;

    InitializeVAMM(
      sqrtPriceX96?: null,
      tick?: null
    ): TypedEventFilter<
      [BigNumber, number],
      { sqrtPriceX96: BigNumber; tick: number }
    >;

    "Mint(address,address,int24,int24,uint128)"(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, number, number, BigNumber],
      {
        sender: string;
        owner: string;
        tickLower: number;
        tickUpper: number;
        amount: BigNumber;
      }
    >;

    Mint(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, number, number, BigNumber],
      {
        sender: string;
        owner: string;
        tickLower: number;
        tickUpper: number;
        amount: BigNumber;
      }
    >;

    "SetFeeProtocol(uint8,uint8)"(
      feeProtocolOld?: null,
      feeProtocol?: null
    ): TypedEventFilter<
      [number, number],
      { feeProtocolOld: number; feeProtocol: number }
    >;

    SetFeeProtocol(
      feeProtocolOld?: null,
      feeProtocol?: null
    ): TypedEventFilter<
      [number, number],
      { feeProtocolOld: number; feeProtocol: number }
    >;

    "Swap(address,address,uint160,uint128,int24,int24,int24)"(
      sender?: string | null,
      recipient?: string | null,
      sqrtPriceX96?: null,
      liquidity?: null,
      tick?: null,
      tickLower?: null,
      tickUpper?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, number, number, number],
      {
        sender: string;
        recipient: string;
        sqrtPriceX96: BigNumber;
        liquidity: BigNumber;
        tick: number;
        tickLower: number;
        tickUpper: number;
      }
    >;

    Swap(
      sender?: string | null,
      recipient?: string | null,
      sqrtPriceX96?: null,
      liquidity?: null,
      tick?: null,
      tickLower?: null,
      tickUpper?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, number, number, number],
      {
        sender: string;
        recipient: string;
        sqrtPriceX96: BigNumber;
        liquidity: BigNumber;
        tick: number;
        tickLower: number;
        tickUpper: number;
      }
    >;
  };

  estimateGas: {
    burn(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    computeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    feeWad(overrides?: CallOverrides): Promise<BigNumber>;

    fixedTokenGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _marginEngineAddress: string,
      _tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeVAMM(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    marginEngine(overrides?: CallOverrides): Promise<BigNumber>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    protocolFees(overrides?: CallOverrides): Promise<BigNumber>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeProtocol(
      feeProtocol: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<BigNumber>;

    ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    updateProtocolFees(
      protocolFeesCollected: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vammVars(overrides?: CallOverrides): Promise<BigNumber>;

    variableTokenGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    computeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeWad(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fixedTokenGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _marginEngineAddress: string,
      _tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeVAMM(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marginEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxLiquidityPerTick(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    protocolFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeProtocol(
      feeProtocol: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tickSpacing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateProtocolFees(
      protocolFeesCollected: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vammVars(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    variableTokenGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
