/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L1GatewayTester,
  L1GatewayTesterInterface,
} from '../L1GatewayTester'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_sequenceNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
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
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'newData',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'madeExternalCall',
        type: 'bool',
      },
    ],
    name: 'WithdrawRedirected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalFinalized',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cloneableProxyHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
    ],
    name: 'encodeWithdrawal',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_initialData',
        type: 'bytes',
      },
    ],
    name: 'getExternalCall',
    outputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_cloneableProxyHash',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_l2BeaconProxyFactory',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2BeaconProxyFactory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'redirectedExits',
    outputs: [
      {
        internalType: 'bool',
        name: 'isExit',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: '_newTo',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_shouldUseInbox',
        type: 'bool',
      },
    ],
    name: 'setInboxUse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferExitAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelist',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50612516806100206000396000f3fe6080604052600436106100de5760003560e01c8063a01893bf11610085578063a01893bf14610277578063a0c76a96146102ca578063a7e28d4814610418578063bcf2e6eb1461044b578063bd5f3e7d14610511578063d2ce7d65146105fc578063f68a908214610696578063f887ea40146107ed578063fb0e722b14610802576100de565b8063020a6058146100e35780632db09c1c1461012e5780632e567b361461015f57806369ec2bed146101f757806370fc045f1461022357806393e59dc11461023857806395fcea781461024d57806397881f8d14610262575b600080fd5b3480156100ef57600080fd5b5061011c6004803603604081101561010657600080fd5b50803590602001356001600160a01b0316610817565b60408051918252519081900360200190f35b34801561013a57600080fd5b5061014361084c565b604080516001600160a01b039092168252519081900360200190f35b6101f5600480360360a081101561017557600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156101b757600080fd5b8201836020820111156101c957600080fd5b803590602001918460018302840111600160201b831117156101ea57600080fd5b509092509050610860565b005b34801561020357600080fd5b506101f56004803603602081101561021a57600080fd5b503515156109f0565b34801561022f57600080fd5b50610143610a03565b34801561024457600080fd5b50610143610a12565b34801561025957600080fd5b506101f5610a21565b34801561026e57600080fd5b5061011c610a7e565b34801561028357600080fd5b506101f5600480360360a081101561029a57600080fd5b506001600160a01b0381358116916020810135821691604082013581169160608101359160809091013516610a84565b3480156102d657600080fd5b506103a3600480360360a08110156102ed57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561032f57600080fd5b82018360208201111561034157600080fd5b803590602001918460018302840111600160201b8311171561036257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b53945050505050565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103dd5781810151838201526020016103c5565b50505050905090810190601f16801561040a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561042457600080fd5b506101436004803603602081101561043b57600080fd5b50356001600160a01b0316610dcd565b34801561045757600080fd5b506104756004803603602081101561046e57600080fd5b5035610e00565b6040518084151515158152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156104d45781810151838201526020016104bc565b50505050905090810190601f1680156105015780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561051d57600080fd5b506101f5600480360360a081101561053457600080fd5b8135916001600160a01b03602082013581169260408301359091169190810190608081016060820135600160201b81111561056e57600080fd5b82018360208201111561058057600080fd5b803590602001918460018302840111600160201b831117156105a157600080fd5b919390929091602081019035600160201b8111156105be57600080fd5b8201836020820111156105d057600080fd5b803590602001918460018302840111600160201b831117156105f157600080fd5b509092509050610eb7565b6103a3600480360360c081101561061257600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561065857600080fd5b82018360208201111561066a57600080fd5b803590602001918460018302840111600160201b8311171561068b57600080fd5b5090925090506111d5565b3480156106a257600080fd5b5061075c600480360360608110156106b957600080fd5b8135916001600160a01b0360208201351691810190606081016040820135600160201b8111156106e857600080fd5b8201836020820111156106fa57600080fd5b803590602001918460018302840111600160201b8311171561071b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611510945050505050565b60405180836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156107b1578181015183820152602001610799565b50505050905090810190601f1680156107de5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b3480156107f957600080fd5b506101436115fb565b34801561080e57600080fd5b5061014361160a565b604080516020808201949094526001600160a01b03929092168282015280518083038201815260609092019052805191012090565b60005461010090046001600160a01b031681565b6002546001600160a01b0316600061087782611619565b9050336001600160a01b038216146108c8576040805162461bcd60e51b815260206004820152600f60248201526e4e4f545f46524f4d5f42524944474560881b604482015290519081900360640190fd5b60006108d383611633565b6000549091506001600160a01b038083166101009092041614610938576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60006060610946878761164f565b91509150805160001461096457506040805160208101909152600081525b61096f828a83611510565b50985061097d8b8a8a6116fc565b81896001600160a01b03168b6001600160a01b03167f891afe029c75c4f8c5855fc3480598bc5a53739344f6ae575bdb7ea2a79f56b38e8c60405180836001600160a01b03166001600160a01b031681526020018281526020019250505060405180910390a45050505050505050505050565b6000805460ff1916911515919091179055565b6005546001600160a01b031681565b6006546001600160a01b031681565b6000610a2b61171b565b9050336001600160a01b03821614610a7b576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b60045481565b610a8f858585611740565b81610ad5576040805162461bcd60e51b81526020600482015260116024820152700929cac82989288bea0a49eb0b29082a69607b1b604482015290519081900360640190fd5b6001600160a01b038116610b21576040805162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa122a0a1a7a760911b604482015290519081900360640190fd5b600491909155600580546001600160a01b039092166001600160a01b0319928316179055600680549091169055505050565b606080610b67876306fdde0360e01b61174b565b610b78886395d89b4160e01b61174b565b610b898963313ce56760e01b61174b565b60405160200180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610bd1578181015183820152602001610bb9565b50505050905090810190601f168015610bfe5780820380516001836020036101000a031916815260200191505b50848103835286518152865160209182019188019080838360005b83811015610c31578181015183820152602001610c19565b50505050905090810190601f168015610c5e5780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b83811015610c91578181015183820152602001610c79565b50505050905090810190601f168015610cbe5780820380516001836020036101000a031916815260200191505b5096505050505050506040516020818303038152906040529050632e567b3660e01b87878787610cee8689611822565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b83811015610d59578181015183820152602001610d41565b50505050905090810190601f168015610d865780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a1699909917909852509597505050505050505095945050505050565b600080610dd983611914565b600454600554919250610df7918391906001600160a01b0316611971565b9150505b919050565b600360209081526000918252604091829020805460018083018054865160026101009483161585026000190190921691909104601f810187900487028201870190975286815260ff841696929093046001600160a01b031694909190830182828015610ead5780601f10610e8257610100808354040283529160200191610ead565b820191906000526020600020905b815481529060010190602001808311610e9057829003601f168201915b5050505050905083565b6000610ed3888860405180602001604052806000815250611510565b509050336001600160a01b03821614610f29576040805162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b604482015290519081900360640190fd5b8315610f6e576040805162461bcd60e51b815260206004820152600f60248201526e1393d7d110551057d0531313d5d151608a1b604482015290519081900360640190fd5b610fb088888888888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506119ce92505050565b811561111857610fc8866001600160a01b0316611a5f565b61100b576040805162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000866001600160a01b031663592e2070838b87876040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050602060405180830381600087803b1580156110a157600080fd5b505af11580156110b5573d6000803e3d6000fd5b505050506040513d60208110156110cb57600080fd5b5051905080611116576040805162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b604482015290519081900360640190fd5b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051808060200180602001841515151581526020018381038352888882818152602001925080828437600083820152601f01601f191690910184810383528681526020019050868680828437600083820152604051601f909101601f1916909201829003995090975050505050505050a45050505050505050565b60606111e033611a65565b611223576040805162461bcd60e51b815260206004820152600f60248201526e2727aa2fa32927a6afa927aaaa22a960891b604482015290519081900360640190fd5b6000806060600061123333611a65565b1561124c576112428787611a79565b9094509150611289565b33935086868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294505050505b81806020019051604081101561129e57600080fd5b815160208301805160405192949293830192919084600160201b8211156112c457600080fd5b9083019060208201858111156112d957600080fd5b8251600160201b8111828201881017156112f257600080fd5b82525081516020918201929091019080838360005b8381101561131f578181015183820152602001611307565b50505050905090810190601f16801561134c5780820380516001836020036101000a031916815260200191505b50604052505081519194509192501590506113a4576040805162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b604482015290519081900360640190fd5b6113b68c6001600160a01b0316611a5f565b6113f9576040805162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b60006114048d610dcd565b90506001600160a01b038116611453576040805162461bcd60e51b815260206004820152600f60248201526e1393d7d30c97d513d2d15397d4d155608a1b604482015290519081900360640190fd5b61145e8d868d611ab7565b9a5061146d8d868e8e87610b53565b955061147d858c8c8c868b611bd7565b93505050818a6001600160a01b0316846001600160a01b03167fb8910b9960c443aac3240b98585384e3a6f109fbf6969e264c3f183d69aba7e18e8d60405180836001600160a01b03166001600160a01b031681526020018281526020019250505060405180910390a4506040805160208082019390935281518082039093018352810190529998505050505050505050565b6000606060006115208686610817565b600081815260036020526040902080549192509060ff16156115ea5780546001808301805460408051602060026101009685161587026000190190941693909304601f8101849004840282018401909252818152939094046001600160a01b03169391929183918301828280156115d85780601f106115ad576101008083540402835291602001916115d8565b820191906000526020600020905b8154815290600101906020018083116115bb57829003601f168201915b505050505090509350935050506115f3565b85859350935050505b935093915050565b6001546001600160a01b031681565b6002546001600160a01b031681565b6000805460ff161561162c575080610dfb565b5033610dfb565b6000805460ff161561162c5761164882611c38565b9050610dfb565b600060608383604081101561166357600080fd5b81359190810190604081016020820135600160201b81111561168457600080fd5b82018360208201111561169657600080fd5b803590602001918460018302840111600160201b831117156116b757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b6117166001600160a01b038416838363ffffffff611d6316565b505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b611716838383611db5565b60408051600481526024810182526020810180516001600160e01b03166001600160e01b031985161781529151815160609384936001600160a01b038816939092909182918083835b602083106117b35780518252601f199092019160209182019101611794565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114611813576040519150601f19603f3d011682016040523d82523d6000602084013e611818565b606091505b5095945050505050565b60608282604051602001808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561186a578181015183820152602001611852565b50505050905090810190601f1680156118975780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156118ca5781810151838201526020016118b2565b50505050905090810190601f1680156118f75780820380516001836020036101000a031916815260200191505b5060408051601f1981840301815291905298975050505050505050565b600054604080516001600160a01b03938416602080830191909152825180830382018152828401845280519082012061010090940490941660608201526080808201939093528151808203909301835260a0019052805191012090565b604080516001600160f81b03196020808301919091526bffffffffffffffffffffffff19606085901b16602183015260358201869052605580830186905283518084039091018152607590920190925280519101205b9392505050565b60006119da8585610817565b6040805160608101825260018082526001600160a01b0387811660208085019182528486018981526000888152600383529690962085518154935160ff1990941690151517610100600160a81b0319166101009390941692909202929092178155935180519596509294611a559392850192909101906123f5565b5050505050505050565b3b151590565b6001546001600160a01b0390811691161490565b6000606083836040811015611a8d57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561168457600080fd5b604080516370a0823160e01b8152306004820152905160009182916001600160a01b038716916370a08231916024808301926020929190829003018186803b158015611b0257600080fd5b505afa158015611b16573d6000803e3d6000fd5b505050506040513d6020811015611b2c57600080fd5b50519050611b4b6001600160a01b03861685308663ffffffff611e7216565b604080516370a0823160e01b815230600482015290516000916001600160a01b038816916370a0823191602480820192602092909190829003018186803b158015611b9557600080fd5b505afa158015611ba9573d6000803e3d6000fd5b505050506040513d6020811015611bbf57600080fd5b50519050611bcd8183611ed2565b9695505050505050565b6000611c2d600260009054906101000a90046001600160a01b0316600060019054906101000a90046001600160a01b03168934600060405180606001604052808a81526020018c81526020018b81525088611f2f565b979650505050505050565b600080611c4483611f5a565b6001600160a01b031663ab5d89436040518163ffffffff1660e01b815260040160206040518083038186803b158015611c7c57600080fd5b505afa158015611c90573d6000803e3d6000fd5b505050506040513d6020811015611ca657600080fd5b505160408051634032458160e11b815290519192506000916001600160a01b038416916380648b02916004808301926020929190829003018186803b158015611cee57600080fd5b505afa158015611d02573d6000803e3d6000fd5b505050506040513d6020811015611d1857600080fd5b505190506001600160a01b038116610df7576040805162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611716908490611f6b565b611dbf838361201c565b6001600160a01b038216611e07576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b6001600160a01b038116611e4e576040805162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052611ecc908590611f6b565b50505050565b600082821115611f29576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000611f4e8888888888886000015189602001518a604001518a6120f7565b98975050505050505050565b6000611f6582611619565b92915050565b6060611fc0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166121189092919063ffffffff16565b80519091501561171657808060200190516020811015611fdf57600080fd5b50516117165760405162461bcd60e51b815260040180806020018281038252602a8152602001806124b7602a913960400191505060405180910390fd5b6001600160a01b03821661206d576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b60005461010090046001600160a01b0316156120bf576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b60008054610100600160a81b0319166101006001600160a01b0394851602179055600180546001600160a01b03191691909216179055565b600061210a8a8a8a8a8a8a8a8a8a61212f565b9a9950505050505050505050565b60606121278484600085612205565b949350505050565b60008060608a6001600160a01b031688856040518082805190602001908083835b6020831061216f5780518252601f199092019160209182019101612150565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146121d1576040519150601f19603f3d011682016040523d82523d6000602084013e6121d6565b606091505b509150915081600081146121e9576121f1565b815160208301fd5b506105399c9b505050505050505050505050565b6060824710156122465760405162461bcd60e51b81526004018080602001828103825260268152602001806124916026913960400191505060405180910390fd5b61224f85611a5f565b6122a0576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106122df5780518252601f1990920191602091820191016122c0565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612341576040519150601f19603f3d011682016040523d82523d6000602084013e612346565b606091505b5091509150611c2d828286606083156123605750816119c7565b8251156123705782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156123ba5781810151838201526020016123a2565b50505050905090810190601f1680156123e75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061243657805160ff1916838001178555612463565b82800160010185558215612463579182015b82811115612463578251825591602001919060010190612448565b5061246f929150612473565b5090565b61248d91905b8082111561246f5760008155600101612479565b9056fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122075f4d7a43bde0a58fcd41727cf58772f36500ca2c797e2847c450b6c6ebbd3b964736f6c634300060b0033'

export class L1GatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L1GatewayTester> {
    return super.deploy(overrides || {}) as Promise<L1GatewayTester>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1GatewayTester {
    return super.attach(address) as L1GatewayTester
  }
  connect(signer: Signer): L1GatewayTester__factory {
    return super.connect(signer) as L1GatewayTester__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L1GatewayTesterInterface {
    return new utils.Interface(_abi) as L1GatewayTesterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1GatewayTester {
    return new Contract(address, _abi, signerOrProvider) as L1GatewayTester
  }
}
