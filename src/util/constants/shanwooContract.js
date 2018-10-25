const address = '0x87eC5E21d24b06044b5B8c468F46Fb99B8F29311'
const ABI = [
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'tokenOwner',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'spender',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'tokens',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'acceptOwnership',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'spender',
        'type': 'address'
      },
      {
        'name': 'tokens',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'spender',
        'type': 'address'
      },
      {
        'name': 'tokens',
        'type': 'uint256'
      },
      {
        'name': 'data',
        'type': 'bytes'
      }
    ],
    'name': 'approveAndCall',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'depositTo',
        'type': 'address'
      },
      {
        'name': 'depositNums',
        'type': 'uint256'
      },
      {
        'name': 'requireTokens',
        'type': 'uint256'
      },
      {
        'name': 'proofHash',
        'type': 'bytes32'
      },
      {
        'name': 'proofFileUrl',
        'type': 'string'
      }
    ],
    'name': 'depositShare',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      },
      {
        'name': 'exchangeId',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'exchangeId',
        'type': 'bytes32'
      }
    ],
    'name': 'purchaseShare',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'exchangeId',
        'type': 'bytes32'
      },
      {
        'indexed': false,
        'name': 'depositFrom',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'depositTo',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'depositNums',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'requireTokens',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'proofHash',
        'type': 'bytes32'
      },
      {
        'indexed': false,
        'name': 'proofFileUrl',
        'type': 'string'
      }
    ],
    'name': 'DepositShare',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_from',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': '_to',
        'type': 'address'
      }
    ],
    'name': 'OwnershipTransferred',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': 'exchangeId',
        'type': 'bytes32'
      },
      {
        'indexed': false,
        'name': 'depositFrom',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'depositTo',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'depositNums',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'requireTokens',
        'type': 'uint256'
      }
    ],
    'name': 'PurchaseShare',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'from',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'to',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'tokens',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'to',
        'type': 'address'
      },
      {
        'name': 'tokens',
        'type': 'uint256'
      }
    ],
    'name': 'transfer',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'tokenAddress',
        'type': 'address'
      },
      {
        'name': 'tokens',
        'type': 'uint256'
      }
    ],
    'name': 'transferAnyERC20Token',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'from',
        'type': 'address'
      },
      {
        'name': 'to',
        'type': 'address'
      },
      {
        'name': 'tokens',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'name': 'success',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': '_newOwner',
        'type': 'address'
      }
    ],
    'name': 'transferOwnership',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'payable': true,
    'stateMutability': 'payable',
    'type': 'fallback'
  },
  {
    'inputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'tokenOwner',
        'type': 'address'
      },
      {
        'name': 'spender',
        'type': 'address'
      }
    ],
    'name': 'allowance',
    'outputs': [
      {
        'name': 'remaining',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'tokenOwner',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'name': 'balance',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'decimals',
    'outputs': [
      {
        'name': '',
        'type': 'uint8'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'exchangeId',
        'type': 'bytes32'
      }
    ],
    'name': 'depositInfo',
    'outputs': [
      {
        'name': 'hasPurchase',
        'type': 'bool'
      },
      {
        'name': 'from',
        'type': 'address'
      },
      {
        'name': 'to',
        'type': 'address'
      },
      {
        'name': 'depositNums',
        'type': 'uint256'
      },
      {
        'name': 'requireTokens',
        'type': 'uint256'
      },
      {
        'name': 'proofHash',
        'type': 'bytes32'
      },
      {
        'name': 'proofFileUrl',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'newOwner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  }
]

export { address, ABI }