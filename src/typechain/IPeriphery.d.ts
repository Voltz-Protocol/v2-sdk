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

interface IPeripheryInterface extends ethers.utils.Interface {
  functions: {
    "getCurrentTick(address)": FunctionFragment;
    "lpMarginCaps(address)": FunctionFragment;
    "lpMarginCumulatives(address)": FunctionFragment;
    "mintOrBurn((address,int24,int24,uint256,bool,int256))": FunctionFragment;
    "setLPMarginCap(address,int256)": FunctionFragment;
    "settlePositionAndWithdrawMargin(address,address,int24,int24)": FunctionFragment;
    "swap((address,bool,uint256,uint160,int24,int24,uint256))": FunctionFragment;
    "updatePositionMargin(address,int24,int24,int256,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCurrentTick",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lpMarginCaps",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lpMarginCumulatives",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mintOrBurn",
    values: [
      {
        marginEngine: string;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        notional: BigNumberish;
        isMint: boolean;
        marginDelta: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setLPMarginCap",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settlePositionAndWithdrawMargin",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      {
        marginEngine: string;
        isFT: boolean;
        notional: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        marginDelta: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePositionMargin",
    values: [string, BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCurrentTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lpMarginCaps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lpMarginCumulatives",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintOrBurn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLPMarginCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settlePositionAndWithdrawMargin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updatePositionMargin",
    data: BytesLike
  ): Result;

  events: {
    "MarginCap(address,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MarginCap"): EventFragment;
}

export type MarginCapEvent = TypedEvent<
  [string, BigNumber] & { _vamm: string; _lpMarginCapNew: BigNumber }
>;

export class IPeriphery extends BaseContract {
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

  interface: IPeripheryInterface;

  functions: {
    getCurrentTick(
      marginEngine: string,
      overrides?: CallOverrides
    ): Promise<[number] & { currentTick: number }>;

    lpMarginCaps(
      _vamm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lpMarginCumulatives(
      _vamm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintOrBurn(
      params: {
        marginEngine: string;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        notional: BigNumberish;
        isMint: boolean;
        marginDelta: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLPMarginCap(
      _vamm: string,
      _lpMarginCapNew: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settlePositionAndWithdrawMargin(
      _marginEngine: string,
      _owner: string,
      _tickLower: BigNumberish,
      _tickUpper: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      params: {
        marginEngine: string;
        isFT: boolean;
        notional: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        marginDelta: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePositionMargin(
      _marginEngine: string,
      _tickLower: BigNumberish,
      _tickUpper: BigNumberish,
      _marginDelta: BigNumberish,
      _fullyWithdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getCurrentTick(
    marginEngine: string,
    overrides?: CallOverrides
  ): Promise<number>;

  lpMarginCaps(
    _vamm: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lpMarginCumulatives(
    _vamm: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintOrBurn(
    params: {
      marginEngine: string;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      notional: BigNumberish;
      isMint: boolean;
      marginDelta: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLPMarginCap(
    _vamm: string,
    _lpMarginCapNew: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settlePositionAndWithdrawMargin(
    _marginEngine: string,
    _owner: string,
    _tickLower: BigNumberish,
    _tickUpper: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    params: {
      marginEngine: string;
      isFT: boolean;
      notional: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
      marginDelta: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePositionMargin(
    _marginEngine: string,
    _tickLower: BigNumberish,
    _tickUpper: BigNumberish,
    _marginDelta: BigNumberish,
    _fullyWithdraw: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getCurrentTick(
      marginEngine: string,
      overrides?: CallOverrides
    ): Promise<number>;

    lpMarginCaps(_vamm: string, overrides?: CallOverrides): Promise<BigNumber>;

    lpMarginCumulatives(
      _vamm: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintOrBurn(
      params: {
        marginEngine: string;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        notional: BigNumberish;
        isMint: boolean;
        marginDelta: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setLPMarginCap(
      _vamm: string,
      _lpMarginCapNew: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    settlePositionAndWithdrawMargin(
      _marginEngine: string,
      _owner: string,
      _tickLower: BigNumberish,
      _tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      params: {
        marginEngine: string;
        isFT: boolean;
        notional: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        marginDelta: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
        _fixedTokenDelta: BigNumber;
        _variableTokenDelta: BigNumber;
        _cumulativeFeeIncurred: BigNumber;
        _fixedTokenDeltaUnbalanced: BigNumber;
        _marginRequirement: BigNumber;
        _tickAfter: number;
      }
    >;

    updatePositionMargin(
      _marginEngine: string,
      _tickLower: BigNumberish,
      _tickUpper: BigNumberish,
      _marginDelta: BigNumberish,
      _fullyWithdraw: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MarginCap(address,int256)"(
      _vamm?: null,
      _lpMarginCapNew?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _vamm: string; _lpMarginCapNew: BigNumber }
    >;

    MarginCap(
      _vamm?: null,
      _lpMarginCapNew?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _vamm: string; _lpMarginCapNew: BigNumber }
    >;
  };

  estimateGas: {
    getCurrentTick(
      marginEngine: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lpMarginCaps(
      _vamm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lpMarginCumulatives(
      _vamm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintOrBurn(
      params: {
        marginEngine: string;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        notional: BigNumberish;
        isMint: boolean;
        marginDelta: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLPMarginCap(
      _vamm: string,
      _lpMarginCapNew: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settlePositionAndWithdrawMargin(
      _marginEngine: string,
      _owner: string,
      _tickLower: BigNumberish,
      _tickUpper: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      params: {
        marginEngine: string;
        isFT: boolean;
        notional: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        marginDelta: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePositionMargin(
      _marginEngine: string,
      _tickLower: BigNumberish,
      _tickUpper: BigNumberish,
      _marginDelta: BigNumberish,
      _fullyWithdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCurrentTick(
      marginEngine: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lpMarginCaps(
      _vamm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lpMarginCumulatives(
      _vamm: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintOrBurn(
      params: {
        marginEngine: string;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        notional: BigNumberish;
        isMint: boolean;
        marginDelta: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLPMarginCap(
      _vamm: string,
      _lpMarginCapNew: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settlePositionAndWithdrawMargin(
      _marginEngine: string,
      _owner: string,
      _tickLower: BigNumberish,
      _tickUpper: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      params: {
        marginEngine: string;
        isFT: boolean;
        notional: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        marginDelta: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePositionMargin(
      _marginEngine: string,
      _tickLower: BigNumberish,
      _tickUpper: BigNumberish,
      _marginDelta: BigNumberish,
      _fullyWithdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
