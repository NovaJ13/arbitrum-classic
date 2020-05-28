/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from 'ethers'
import { Provider } from 'ethers/providers'
import { UnsignedTransaction } from 'ethers/utils/transaction'

import { GlobalInbox } from './GlobalInbox'

export class GlobalInboxFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(): Promise<GlobalInbox> {
    return super.deploy() as Promise<GlobalInbox>
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction()
  }
  attach(address: string): GlobalInbox {
    return super.attach(address) as GlobalInbox
  }
  connect(signer: Signer): GlobalInboxFactory {
    return super.connect(signer) as GlobalInboxFactory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GlobalInbox {
    return new Contract(address, _abi, signerOrProvider) as GlobalInbox
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
    ],
    name: 'ContractTransactionMessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
    ],
    name: 'ERC20DepositMessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'erc721',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
    ],
    name: 'ERC721DepositMessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'messageNum',
        type: 'uint256',
      },
    ],
    name: 'EthDepositMessageDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'nodeHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'messageIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'originalOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'prevOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'PaymentTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
    ],
    name: 'TransactionMessageBatchDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'seqNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'TransactionMessageDelivered',
    type: 'event',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getERC20Balance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getERC721Tokens',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'getEthBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'originalOwner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'nodeHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'messageIndex',
        type: 'uint256',
      },
    ],
    name: 'getPaymentOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'hasERC721',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'ownedERC20s',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'ownedERC721s',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'originalOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'nodeHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'messageIndex',
        type: 'uint256',
      },
    ],
    name: 'transferPayment',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_tokenContract',
        type: 'address',
      },
    ],
    name: 'withdrawERC20',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'withdrawERC721',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'withdrawEth',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getInbox',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'bytes',
        name: '_messages',
        type: 'bytes',
      },
      {
        internalType: 'uint256[]',
        name: 'messageCounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes32[]',
        name: 'nodeHashes',
        type: 'bytes32[]',
      },
    ],
    name: 'sendMessages',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_seqNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'sendTransactionMessage',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
    ],
    name: 'depositEthMessage',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_erc20',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'depositERC20Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_chain',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_erc721',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'depositERC721Message',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'forwardContractTransactionMessage',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
    ],
    name: 'forwardEthMessage',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: 'chain',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'transactions',
        type: 'bytes',
      },
    ],
    name: 'deliverTransactionBatch',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506125c0806100206000396000f3fe60806040526004361061011f5760003560e01c80638f5ed73e116100a0578063bd4fbb3611610064578063bd4fbb36146106e3578063c3a8962c1461073e578063d2256c6614610779578063f3e414f8146107c2578063f4f3b200146107fb5761011f565b80638f5ed73e1461052c57806396588a27146105cc578063a0ef91df146105fa578063b7dabd7a1461060f578063bca22b761461069a5761011f565b80634d2301cc116100e75780634d2301cc146103a25780635bd21290146103e75780636e2b89c51461041557806384cb7997146104485780638b7010aa146104e35761011f565b80630220168114610124578063072fd2bb146101705780630758fb0a1461028d57806333f2ac421461031857806345a53f091461034b575b600080fd5b34801561013057600080fd5b506101576004803603602081101561014757600080fd5b50356001600160a01b031661082e565b6040805192835260208301919091528051918290030190f35b34801561017c57600080fd5b5061028b6004803603606081101561019357600080fd5b810190602081018135600160201b8111156101ad57600080fd5b8201836020820111156101bf57600080fd5b803590602001918460018302840111600160201b831117156101e057600080fd5b919390929091602081019035600160201b8111156101fd57600080fd5b82018360208201111561020f57600080fd5b803590602001918460208302840111600160201b8311171561023057600080fd5b919390929091602081019035600160201b81111561024d57600080fd5b82018360208201111561025f57600080fd5b803590602001918460208302840111600160201b8311171561028057600080fd5b509092509050610851565b005b34801561029957600080fd5b506102c8600480360360408110156102b057600080fd5b506001600160a01b0381358116916020013516610985565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156103045781810151838201526020016102ec565b505050509050019250505060405180910390f35b34801561032457600080fd5b506102c86004803603602081101561033b57600080fd5b50356001600160a01b0316610a4b565b34801561035757600080fd5b5061038e6004803603606081101561036e57600080fd5b506001600160a01b03813581169160208101359091169060400135610b0e565b604080519115158252519081900360200190f35b3480156103ae57600080fd5b506103d5600480360360208110156103c557600080fd5b50356001600160a01b0316610b8e565b60408051918252519081900360200190f35b61028b600480360360408110156103fd57600080fd5b506001600160a01b0381358116916020013516610ba9565b34801561042157600080fd5b506102c86004803603602081101561043857600080fd5b50356001600160a01b0316610bc2565b34801561045457600080fd5b5061028b6004803603608081101561046b57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156104a557600080fd5b8201836020820111156104b757600080fd5b803590602001918460018302840111600160201b831117156104d857600080fd5b509092509050610c79565b3480156104ef57600080fd5b5061028b6004803603608081101561050657600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135610cc3565b34801561053857600080fd5b5061028b600480360360a081101561054f57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561058e57600080fd5b8201836020820111156105a057600080fd5b803590602001918460018302840111600160201b831117156105c157600080fd5b509092509050610ce1565b61028b600480360360408110156105e257600080fd5b506001600160a01b0381358116916020013516610d2d565b34801561060657600080fd5b5061028b610d42565b34801561061b57600080fd5b5061028b6004803603604081101561063257600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561065c57600080fd5b82018360208201111561066e57600080fd5b803590602001918460018302840111600160201b8311171561068f57600080fd5b509092509050610d8d565b3480156106a657600080fd5b5061028b600480360360808110156106bd57600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135610e69565b3480156106ef57600080fd5b506107226004803603606081101561070657600080fd5b506001600160a01b038135169060208101359060400135610e81565b604080516001600160a01b039092168252519081900360200190f35b34801561074a57600080fd5b506103d56004803603604081101561076157600080fd5b506001600160a01b0381358116916020013516610ec2565b34801561078557600080fd5b5061028b6004803603608081101561079c57600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135610f2b565b3480156107ce57600080fd5b5061028b600480360360408110156107e557600080fd5b506001600160a01b038135169060200135611029565b34801561080757600080fd5b5061028b6004803603602081101561081e57600080fd5b50356001600160a01b03166110ed565b6001600160a01b0316600090815260046020526040902080546001909101549091565b60008080808881805b828610801561086857508782105b15610976578a8a8381811061087957fe5b905060200201356000141561089357506001016000610971565b6108d48d8d8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a92506111ba915050565b92995090975095509350866108e857610976565b61093f8989848181106108f757fe5b90506020020135828f8f8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508c92508b915061127c9050565b90975095508661094e57610976565b6001018a8a8381811061095d57fe5b905060200201358110610971575060010160005b61085a565b50505050505050505050505050565b6001600160a01b03808216600090815260026020908152604080832093861683529083905290205460609190806109ce5750506040805160008152602081019091529050610a45565b8160010160018203815481106109e057fe5b9060005260206000209060030201600201805480602002602001604051908101604052809291908181526020018280548015610a3b57602002820191906000526020600020905b815481526020019060010190808311610a27575b5050505050925050505b92915050565b6001600160a01b038116600090815260026020908152604091829020600181015483518181528184028101909301909352606092909183918015610a99578160200160208202803883390190505b50805190915060005b81811015610b0457836001018181548110610ab957fe5b600091825260209091206003909102015483516001600160a01b0390911690849083908110610ae457fe5b6001600160a01b0390921660209283029190910190910152600101610aa2565b5090949350505050565b6001600160a01b03808316600090815260026020908152604080832093871683529083905281205490919080610b4957600092505050610b87565b816001016001820381548110610b5b57fe5b906000526020600020906003020160010160008581526020019081526020016000205460001415925050505b9392505050565b6001600160a01b031660009081526020819052604090205490565b610bb28261141d565b610bbe8282333461143c565b5050565b6001600160a01b03811660009081526001602081815260409283902091820154835181815281830281019092019093526060928391908015610c0e578160200160208202803883390190505b50805190915060005b81811015610b0457836001018181548110610c2e57fe5b600091825260209091206002909102015483516001600160a01b0390911690849083908110610c5957fe5b6001600160a01b0390921660209283029190910190910152600101610c17565b610cbc3386868686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506114db92505050565b5050505050565b610cce8285836115e6565b610cdb8484338585611662565b50505050565b610d25868633878787878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506116fc92505050565b505050505050565b610d363361141d565b610bbe3383833461143c565b6000610d4d33610b8e565b3360008181526020819052604080822082905551929350909183156108fc0291849190818181858888f19350505050158015610bbe573d6000803e3d6000fd5b333214610dcf576040805162461bcd60e51b815260206004820152600b60248201526a6f726967696e206f6e6c7960a81b604482015290519081900360640190fd5b6000600683834342604051602001808660ff1660ff1660f81b81526001018585808284378083019250505083815260200182815260200195505050505050604051602081830303815290604052805190602001209050610e2f84826117ab565b6040516001600160a01b038516907f9cd591b0e52bcf1c506475ee03776192ea3d99f35150ef6651b339333b7372c490600090a250505050565b610e748285836117e1565b610cdb848433858561186e565b600082815260036020908152604080832084845282528083206001600160a01b03808816855292528220541680610ebb5784915050610b87565b9050610b87565b6001600160a01b03808216600090815260016020908152604080832093861683529083905281205490919080610efd57600092505050610a45565b816001016001820381548110610f0f57fe5b9060005260206000209060020201600101549250505092915050565b6000610f38858484610e81565b9050336001600160a01b03821614610f90576040805162461bcd60e51b815260206004820152601660248201527526bab9ba103132903830bcb6b2b73a1037bbb732b91760511b604482015290519081900360640190fd5b600083815260036020908152604080832085845282528083206001600160a01b03808a16808652918452938290208054858a166001600160a01b031990911681179091558251888152938401879052838301919091529284166060830152608082019290925290517fb6cb19e71486466b0282ce82fd31a015b7c00f7d67cddc0da09cccfa58c643839181900360a00190a15050505050565b611034338383611908565b611085576040805162461bcd60e51b815260206004820152601860248201527f57616c6c657420646f65736e2774206f776e20746f6b656e0000000000000000604482015290519081900360640190fd5b60408051632142170760e11b81523060048201523360248201526044810183905290516001600160a01b038416916342842e0e91606480830192600092919082900301818387803b1580156110d957600080fd5b505af1158015610d25573d6000803e3d6000fd5b60006110f98233610ec2565b9050611106338383611b70565b6111415760405162461bcd60e51b815260040180806020018281038252602e81526020018061255e602e913960400191505060405180910390fd5b6040805163a9059cbb60e01b81523360048201526024810183905290516001600160a01b0384169163a9059cbb9160448083019260209291908290030181600087803b15801561119057600080fd5b505af11580156111a4573d6000803e3d6000fd5b505050506040513d6020811015610cdb57600080fd5b60008060008060008060008088905060008a82815181106111d757fe5b016020015160019092019160f81c9050600681146112075750600097508896508795508594506112739350505050565b6112118b83611d03565b9196509094509150846112365750600097508896508795508594506112739350505050565b6112408b83611d03565b9196509093509150846112655750600097508896508795508594506112739350505050565b506001975095509093509150505b92959194509250565b6000806001831415611317576000806000806112988989611d7b565b9350935093509350836112b5576000889550955050505050611413565b60006112c2838d8d610e81565b90506112cf338284611dc8565b50505060008a81526003602090815260408083208c845282528083206001600160a01b0390941683529290522080546001600160a01b03191690556001935091506114139050565b60028314156113b65760008060008060006113328a8a611e26565b945094509450945094508461135257600089965096505050505050611413565b600061135f838e8e610e81565b905061136d33828685611f2d565b50505060008b81526003602090815260408083208d845282528083206001600160a01b0390941683529290522080546001600160a01b0319169055506001935091506114139050565b600383141561140c5760008060008060006113d18a8a611e26565b94509450945094509450846113f157600089965096505050505050611413565b60006113fe838e8e610e81565b905061136d33828685611f5d565b5060009050825b9550959350505050565b6001600160a01b03166000908152602081905260409020805434019055565b6001600160a01b0384166000908152600460205260408120600190810154019061146a858585434287611f81565b905061147686826117ab565b336001600160a01b0316856001600160a01b0316876001600160a01b03167ffd0d0553177fec183128f048fbde54554a3a67302f7ebd7f735215a3582907053486604051808381526020018281526020019250505060405180910390a4505050505050565b6001600160a01b0385166000908152600460205260408120600190810154019061150a86868686434288611feb565b905061151687826117ab565b846001600160a01b0316866001600160a01b0316886001600160a01b03167f362b3acbdbf0277aefa83754ea8d39fc1c55d01d9351cf78969923f8cfee612c8787876040518084815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156115a1578181015183820152602001611589565b50505050905090810190601f1680156115ce5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a450505050505050565b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038516916323b872dd91606480830192600092919082900301818387803b15801561163a57600080fd5b505af115801561164e573d6000803e3d6000fd5b5050505061165d8284836120ca565b505050565b6001600160a01b038516600090815260046020526040812060019081015401906116918686868643428861224e565b905061169d87826117ab565b604080516001600160a01b0386811682526020820186905281830185905291518288169289811692908b16917f40baf11a4a4a4be2a155dbf303fbaec6fabd52e267268bd7e3de4b4ed8a2e0959181900360600190a450505050505050565b600061171587878787878780519060200120434261226d565b905061172187826117ab565b846001600160a01b0316866001600160a01b0316886001600160a01b03167fcf612c95e8993eca9c6e0be96b26b47022996db601dc12b4cf68ec37829d87b3878787604051808481526020018381526020018060200182810382528381815181526020019150805190602001908083836000838110156115a1578181015183820152602001611589565b6001600160a01b038216600090815260046020526040902080546117cf90836122e4565b81556001908101805490910190555050565b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038516916323b872dd9160648083019260209291908290030181600087803b15801561183657600080fd5b505af115801561184a573d6000803e3d6000fd5b505050506040513d602081101561186057600080fd5b5061165d9050828483612310565b6001600160a01b0385166000908152600460205260408120600190810154019061189d868686864342886123e7565b90506118a987826117ab565b604080516001600160a01b0386811682526020820186905281830185905291518288169289811692908b16917fb13d04085b4a9f87fecfccf9b72081bb8a273498d6b08b4bccf2940d555b5e609181900360600190a450505050505050565b6001600160a01b0380841660009081526002602090815260408083209386168352908390528120549091908061194357600092505050610b87565b600082600101600183038154811061195757fe5b60009182526020808320888452600160039093020191820190526040909120549091508061198c576000945050505050610b87565b600282018054829160018501916000919060001981019081106119ab57fe5b6000918252602080832090910154835282019290925260400190205560028201805460001981019081106119db57fe5b90600052602060002001548260020160018303815481106119f857fe5b600091825260208083209091019290925587815260018401909152604081205560028201805480611a2557fe5b6000828152602081208201600019908101919091550190556002820154611b625760018401805484918691600091906000198101908110611a6257fe5b600091825260208083206003909202909101546001600160a01b031683528201929092526040019020556001840180546000198101908110611aa057fe5b9060005260206000209060030201846001016001850381548110611ac057fe5b60009182526020909120825460039092020180546001600160a01b0319166001600160a01b0390921691909117815560028083018054611b039284019190612494565b5050506001600160a01b03871660009081526020859052604081205560018401805480611b2c57fe5b60008281526020812060036000199093019283020180546001600160a01b031916815590611b5d60028301826124e4565b505090555b506001979650505050505050565b600081611b7f57506001610b87565b6001600160a01b03808516600090815260016020908152604080832093871683529083905290205480611bb757600092505050610b87565b6000826001016001830381548110611bcb57fe5b906000526020600020906002020190508060010154851115611bf35760009350505050610b87565b60018101805486900390819055611cf65760018301805483918591600091906000198101908110611c2057fe5b600091825260208083206002909202909101546001600160a01b031683528201929092526040019020556001830180546000198101908110611c5e57fe5b9060005260206000209060020201836001016001840381548110611c7e57fe5b60009182526020808320845460029093020180546001600160a01b0319166001600160a01b0393841617815560019485015490850155908916825285905260408120558301805480611ccc57fe5b60008281526020812060026000199093019283020180546001600160a01b03191681556001015590555b5060019695505050505050565b6000806000808551905084811080611d1d57506021858203105b80611d3f5750600060ff16868681518110611d3457fe5b016020015160f81c14155b15611d54575060009250839150829050611d74565b600160218601611d6c8888840163ffffffff6123fa16565b935093509350505b9250925092565b60008060008060008060008088905060008a8281518110611d9857fe5b016020015160019092019160f81c9050600581146112075750600097508896508795508594506112739350505050565b6001600160a01b038316600090815260208190526040812054821115611df057506000610b87565b506001600160a01b0392831660009081526020819052604080822080548490039055929093168352912080549091019055600190565b6000806000806000806000806000808a905060008c8281518110611e4657fe5b016020015160019092019160f81c905060068114611e7a5750600099508a9850899750879650869550611f23945050505050565b611e848d83611d03565b919750909550915085611ead5750600099508a9850899750879650869550611f23945050505050565b611eb78d83611d03565b919750909450915085611ee05750600099508a9850899750879650869550611f23945050505050565b611eea8d83611d03565b919750909350915085611f135750600099508a9850899750879650869550611f23945050505050565b5060019950975091955093509150505b9295509295909350565b6000611f3a858484611b70565b611f4657506000611f55565b611f51848484612310565b5060015b949350505050565b6000611f6a858484611908565b611f7657506000611f55565b611f518484846120ca565b60408051600160f81b6020808301919091526001600160601b03196060998a1b811660218401529790981b909616603587015260498601949094526069850192909252608984015260a9808401919091528151808403909101815260c99092019052805191012090565b6000600488888888888888604051602001808960ff1660ff1660f81b8152600101886001600160a01b03166001600160a01b031660601b8152601401876001600160a01b03166001600160a01b031660601b815260140186815260200185805190602001908083835b602083106120735780518252601f199092019160209182019101612054565b51815160209384036101000a600019018019909216911617905292019586525084810193909352506040808401919091528051808403820181526060909301905281519101209d9c50505050505050505050505050565b6001600160a01b0380841660009081526002602090815260408083209386168352908390529020548061218a576040805180820182526001600160a01b0386811682528251600080825260208083019095528484019182526001878101805491820180825590835291869020855160039092020180546001600160a01b0319169190941617835590518051919461216992600285019290910190612505565b5050506001600160a01b038516600090815260208490526040902081905590505b600082600101600183038154811061219e57fe5b9060005260206000209060030201905080600101600085815260200190815260200160002054600014612218576040805162461bcd60e51b815260206004820152601d60248201527f63616e27742061646420616c7265616479206f776e656420746f6b656e000000604482015290519081900360640190fd5b60028101805460018181018355600083815260208082209093018890559254968352909201909152604090209290925550505050565b6000612261600389898989898989612416565b98975050505050505050565b6040805160006020808301919091526001600160601b031960609b8c1b81166021840152998b1b8a1660358301529790991b9097166049890152605d880194909452607d870192909252609d86015260bd85015260dd808501919091528251808503909101815260fd909301909152815191012090565b604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b8061231a5761165d565b6001600160a01b038084166000908152600160209081526040808320938616835290839052902054806123b357506040805180820182526001600160a01b0385811680835260006020808501828152600188810180548083018083559186528486209851600290910290980180546001600160a01b03191698909716979097178655905194019390935590815290849052919091208190555b828260010160018303815481106123c657fe5b60009182526020909120600160029092020101805490910190555050505050565b6000612261600289898989898989612416565b6000816020018351101561240d57600080fd5b50016020015190565b6040805160f89990991b6001600160f81b0319166020808b0191909152606098891b6001600160601b031990811660218c015297891b881660358b01529590971b9095166049880152605d870192909252607d860152609d85015260bd808501929092528251808503909201825260dd909301909152805191012090565b8280548282559060005260206000209081019282156124d45760005260206000209182015b828111156124d45782548255916001019190600101906124b9565b506124e0929150612540565b5090565b50805460008255906000526020600020908101906125029190612540565b50565b8280548282559060005260206000209081019282156124d4579160200282015b828111156124d4578251825591602001919060010190612525565b61255a91905b808211156124e05760008155600101612546565b9056fe57616c6c657420646f65736e2774206f776e2073756666696369656e742062616c616e6365206f6620746f6b656ea265627a7a72315820b7be02c4c57b5a65a64ff907e096397132307eb4e7c5b930205c7c87132c561c64736f6c634300050f0032'
