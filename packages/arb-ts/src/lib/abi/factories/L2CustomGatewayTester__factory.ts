/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L2CustomGatewayTester,
  L2CustomGatewayTesterInterface,
} from '../L2CustomGatewayTester'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
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
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'TokenSet',
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
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
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
        name: '_l2ToL1Id',
        type: 'uint256',
      },
      {
        indexed: false,
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
    name: 'WithdrawalInitiated',
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
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
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
    name: 'finalizeInboundTransfer',
    outputs: [],
    stateMutability: 'payable',
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
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1ToL2Token',
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
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
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
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
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
        internalType: 'address[]',
        name: 'l1Address',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'l2Address',
        type: 'address[]',
      },
    ],
    name: 'registerTokenFromL1',
    outputs: [],
    stateMutability: 'nonpayable',
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
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50611644806100206000396000f3fe6080604052600436106100a75760003560e01c806395fcea781161006457806395fcea781461030d578063a0c76a9614610322578063a7e28d48146103fb578063d2ce7d651461042e578063d4f5532f146104c8578063f887ea4014610593576100a7565b8063015234ab146100ac5780632db09c1c146100d35780632e567b3614610104578063485cc9551461019c5780637b3a3c8b146101d75780638a2dc014146102da575b600080fd5b3480156100b857600080fd5b506100c16105a8565b60408051918252519081900360200190f35b3480156100df57600080fd5b506100e86105ae565b604080516001600160a01b039092168252519081900360200190f35b61019a600480360360a081101561011a57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561015c57600080fd5b82018360208201111561016e57600080fd5b803590602001918460018302840111600160201b8311171561018f57600080fd5b5090925090506105bd565b005b3480156101a857600080fd5b5061019a600480360360408110156101bf57600080fd5b506001600160a01b0381358116916020013516610867565b610265600480360360808110156101ed57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561022757600080fd5b82018360208201111561023957600080fd5b803590602001918460018302840111600160201b8311171561025a57600080fd5b509092509050610875565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561029f578181015183820152602001610287565b50505050905090810190601f1680156102cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102e657600080fd5b506100e8600480360360208110156102fd57600080fd5b50356001600160a01b0316610891565b34801561031957600080fd5b5061019a6108ac565b34801561032e57600080fd5b50610265600480360360a081101561034557600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561038757600080fd5b82018360208201111561039957600080fd5b803590602001918460018302840111600160201b831117156103ba57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610909945050505050565b34801561040757600080fd5b506100e86004803603602081101561041e57600080fd5b50356001600160a01b0316610a01565b610265600480360360c081101561044457600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561048a57600080fd5b82018360208201111561049c57600080fd5b803590602001918460018302840111600160201b831117156104bd57600080fd5b509092509050610a1f565b3480156104d457600080fd5b5061019a600480360360408110156104eb57600080fd5b810190602081018135600160201b81111561050557600080fd5b82018360208201111561051757600080fd5b803590602001918460208302840111600160201b8311171561053857600080fd5b919390929091602081019035600160201b81111561055557600080fd5b82018360208201111561056757600080fd5b803590602001918460208302840111600160201b8311171561058857600080fd5b509092509050610c79565b34801561059f57600080fd5b506100e8610e09565b60025481565b6000546001600160a01b031681565b6000546001600160a01b03163314806105f157506000546001600160a01b03166105e633610e18565b6001600160a01b0316145b61063d576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60608061064a8484610e27565b91509150805160001461066857506040805160208101909152600081525b600061067389610a01565b9050610687816001600160a01b0316610f51565b6106ae57600061069b8a838b8b8b89610f57565b905080156106ac575050505061085f565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b178152915181516000936060936001600160a01b038716939092909182918083835b602083106107145780518252601f1990920191602091820191016106f5565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610774576040519150601f19603f3d011682016040523d82523d6000602084013e610779565b606091505b5091509150600082158061078e575060208251105b1561079b575060016107ca565b60006107a883600c610f83565b90508c6001600160a01b0316816001600160a01b0316146107c857600191505b505b80156107f8576107ec8c308d8c60405180602001604052806000815250610fe3565b5050505050505061085f565b505050610806818888611063565b866001600160a01b0316886001600160a01b03168a6001600160a01b03167fc7f2e9c55c40a50fbc217dfc70cd39a222940dfa62145aa0ca49eb9535d4fcb2896040518082815260200191505060405180910390a45050505b505050505050565b61087182826110e0565b5050565b60606108878686866000808888610a1f565b9695505050505050565b6003602052600090815260409020546001600160a01b031681565b60006108b6611132565b9050336001600160a01b03821614610906576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b6060632e567b3660e01b8686868661092360025488611157565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b8381101561098e578181015183820152602001610976565b50505050905090810190601f1680156109bb5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6001600160a01b039081166000908152600360205260409020541690565b60603415610a5f576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610a6c336111ea565b15610a8557610a7b85856111fe565b9092509050610ac2565b33915084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b805115610b0c576040805162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b604482015290519081900360640190fd5b600080610b188c610a01565b9050610b2c816001600160a01b0316610f51565b610b72576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b8b6001600160a01b0316816001600160a01b031663c2eeeebd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610bb557600080fd5b505afa158015610bc9573d6000803e3d6000fd5b505050506040513d6020811015610bdf57600080fd5b50516001600160a01b031614610c34576040805162461bcd60e51b81526020600482015260156024820152742727aa2fa2ac2822a1aa22a22fa618afaa27a5a2a760591b604482015290519081900360640190fd5b610c3f81858c61123c565b9950610c4e8c858d8d87610fe3565b6040805160208082019390935281518082039093018352810190529c9b505050505050505050505050565b6000546001600160a01b0316331480610cad57506000546001600160a01b0316610ca233610e18565b6001600160a01b0316145b610cf9576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60005b83811015610e0257828282818110610d1057fe5b905060200201356001600160a01b031660036000878785818110610d3057fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550828282818110610d9057fe5b905060200201356001600160a01b03166001600160a01b0316858583818110610db557fe5b905060200201356001600160a01b03166001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a3600101610cfc565b5050505050565b6001546001600160a01b031681565b61111061111160901b01190190565b60608083836040811015610e3a57600080fd5b810190602081018135600160201b811115610e5457600080fd5b820183602082011115610e6657600080fd5b803590602001918460018302840111600160201b83111715610e8757600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b811115610ed957600080fd5b820183602082011115610eeb57600080fd5b803590602001918460018302840111600160201b83111715610f0c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b3b151590565b6000610f758730878660405180602001604052806000815250610fe3565b506001979650505050505050565b60008160140183511015610fd3576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b500160200151600160601b900490565b600254600090816110018786610ffc8b838b848b610909565b61135f565b604080516001600160a01b038b811682526020820186905281830189905291519293508392828a16928b16917f3073a74ecb728d10be779fe19a74a1428e20468f5b4d167bf9c73d9067847d73919081900360600190a4979650505050505050565b826001600160a01b0316638c2a993e83836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156110c357600080fd5b505af11580156110d7573d6000803e3d6000fd5b50505050505050565b6110ea828261138b565b6001600160a01b038116610871576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b606082826040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111a1578181015183820152602001611189565b50505050905090810190601f1680156111ce5780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052979650505050505050565b6001546001600160a01b0390811691161490565b600060608383604081101561121257600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610ed957600080fd5b600080846001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561129557600080fd5b505afa1580156112a9573d6000803e3d6000fd5b505050506040513d60208110156112bf57600080fd5b505190506112ce858585611457565b506000856001600160a01b03166370a08231866040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561132757600080fd5b505afa15801561133b573d6000803e3d6000fd5b505050506040513d602081101561135157600080fd5b5051905061088782826114c9565b6002805460010190556000805461138390829086906001600160a01b031685611526565b949350505050565b6001600160a01b0382166113dc576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615611429576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b604080516374f4f54760e01b81526001600160a01b0384811660048301526024820184905291516000928616916374f4f547916044808301928692919082900301818387803b1580156114a957600080fd5b505af11580156114bd573d6000803e3d6000fd5b50939695505050505050565b600082821115611520576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60006115348585858561153d565b95945050505050565b6000806060846001600160a01b031687856040518082805190602001908083835b6020831061157d5780518252601f19909201916020918201910161155e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146115df576040519150601f19603f3d011682016040523d82523d6000602084013e6115e4565b606091505b509150915081600081146115f7576115ff565b815160208301fd5b5061053997965050505050505056fea2646970667358221220e16ba46bac4c26aee08a8bef18c07686b41af71d281843702c5b4f465a2fd29364736f6c634300060b0033'

export class L2CustomGatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2CustomGatewayTester> {
    return super.deploy(overrides || {}) as Promise<L2CustomGatewayTester>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2CustomGatewayTester {
    return super.attach(address) as L2CustomGatewayTester
  }
  connect(signer: Signer): L2CustomGatewayTester__factory {
    return super.connect(signer) as L2CustomGatewayTester__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L2CustomGatewayTesterInterface {
    return new utils.Interface(_abi) as L2CustomGatewayTesterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2CustomGatewayTester {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as L2CustomGatewayTester
  }
}
