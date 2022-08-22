/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockCInterestRateModel,
  MockCInterestRateModelInterface,
} from "../MockCInterestRateModel";

const _abi = [
  {
    inputs: [],
    name: "borrowRatePerBlock",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
    ],
    name: "getBorrowRate",
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
  {
    inputs: [],
    name: "isInterestRateModel",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setBorrowRatePerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061011c806100206000396000f3fe6080604052348015600f57600080fd5b506004361060465760003560e01c806315f2405314604b5780632191f92a146073578063cbf4d877146089578063f8f9da2814609b575b600080fd5b6060605636600460a3565b6000549392505050565b6040519081526020015b60405180910390f35b607a600181565b6040519015158152602001606a565b6099609436600460ce565b600055565b005b606060005481565b60008060006060848603121560b757600080fd5b505081359360208301359350604090920135919050565b60006020828403121560df57600080fd5b503591905056fea2646970667358221220568508bce7529df036e06a1a185f243382e3d4fc9ecc934ddef6d18dd0ce54d264736f6c63430008090033";

export class MockCInterestRateModel__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockCInterestRateModel> {
    return super.deploy(overrides || {}) as Promise<MockCInterestRateModel>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockCInterestRateModel {
    return super.attach(address) as MockCInterestRateModel;
  }
  connect(signer: Signer): MockCInterestRateModel__factory {
    return super.connect(signer) as MockCInterestRateModel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockCInterestRateModelInterface {
    return new utils.Interface(_abi) as MockCInterestRateModelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockCInterestRateModel {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockCInterestRateModel;
  }
}