/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStETH, IStETHInterface } from "../IStETH";

const _abi = [
  {
    inputs: [],
    name: "getFee",
    outputs: [
      {
        internalType: "uint16",
        name: "feeBasisPoints",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_sharesAmount",
        type: "uint256",
      },
    ],
    name: "getPooledEthByShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IStETH__factory {
  static readonly abi = _abi;
  static createInterface(): IStETHInterface {
    return new utils.Interface(_abi) as IStETHInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IStETH {
    return new Contract(address, _abi, signerOrProvider) as IStETH;
  }
}
