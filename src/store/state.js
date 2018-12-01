let state = {
  // partners: [
  //   {
  //     'pid': '0',
  //     'name': '大疆无人机科技1',
  //     'pic': 'static/dji.jpg',
  //     'slogan': 'the future of possible',
  //     'intro': '无人机领军企业',
  //     'capital': '2000000',
  //     'shares': '100000',
  //     'ratio': '20%',
  //     'hash': 'sh7289',
  //     'block': '6829379',
  //     'domain': 'https://www.dji.com/cn'
  //   },
  //   {
  //     'pid': '1',
  //     'name': '大疆无人机科技2',
  //     'pic': 'static/dji.jpg',
  //     'slogan': 'the future of possible',
  //     'intro': '无人机领军企业',
  //     'capital': '2000000',
  //     'shares': '100000',
  //     'ratio': '20%',
  //     'hash': 'sh7289',
  //     'block': '6829379',
  //     'domain': 'https://www.dji.com/cn'
  //   },
  //   {
  //     'pid': '2',
  //     'name': '大疆无人机科技3',
  //     'pic': 'static/dji.jpg',
  //     'slogan': 'the future of possible',
  //     'intro': '无人机领军企业',
  //     'capital': '2000000',
  //     'shares': '100000',
  //     'ratio': '20%',
  //     'hash': 'sh7289',
  //     'block': '6829379',
  //     'domain': 'https://www.dji.com/cn'
  //   },
  //   {
  //     'pid': '2',
  //     'name': '大疆无人机科技4',
  //     'pic': 'static/dji.jpg',
  //     'slogan': 'the future of possible',
  //     'intro': '无人机领军企业',
  //     'capital': '2000000',
  //     'shares': '100000',
  //     'ratio': '20%',
  //     'hash': 'sh7289',
  //     'block': '6829379',
  //     'domain': 'https://www.dji.com/cn'
  //   },
  //   {
  //     'pid': '0',
  //     'name': '大疆无人机科技1',
  //     'pic': 'static/dji.jpg',
  //     'slogan': 'the future of possible',
  //     'intro': '无人机领军企业',
  //     'capital': '2000000',
  //     'shares': '100000',
  //     'ratio': '20%',
  //     'hash': 'sh7289',
  //     'block': '6829379',
  //     'domain': 'https://www.dji.com/cn'
  //   },
  //   {
  //     'pid': '1',
  //     'name': '大疆无人机科技2',
  //     'pic': 'static/dji.jpg',
  //     'slogan': 'the future of possible',
  //     'intro': '无人机领军企业',
  //     'capital': '2000000',
  //     'shares': '100000',
  //     'ratio': '20%',
  //     'hash': 'sh7289',
  //     'block': '6829379',
  //     'domain': 'https://www.dji.com/cn'
  //   },
  //   {
  //     'pid': '2',
  //     'name': '大疆无人机科技3',
  //     'pic': 'static/dji.jpg',
  //     'slogan': 'the future of possible',
  //     'intro': '无人机领军企业',
  //     'capital': '2000000',
  //     'shares': '100000',
  //     'ratio': '20%',
  //     'hash': 'sh7289',
  //     'block': '6829379',
  //     'domain': 'https://www.dji.com/cn'
  //   },
  //   {
  //     'pid': '2',
  //     'name': '大疆无人机科技4',
  //     'pic': 'static/dji.jpg',
  //     'slogan': 'the future of possible',
  //     'intro': '无人机领军企业',
  //     'capital': '2000000',
  //     'shares': '100000',
  //     'ratio': '20%',
  //     'hash': 'sh7289',
  //     'block': '6829379',
  //     'domain': 'https://www.dji.com/cn'
  //   }
  // ],
  // markets: [
  //   {
  //     'name': '前海股权交易所',
  //     'pic': 'static/blockchain.jpg',
  //     'board': '新四板',
  //     'intro': '私募、直销',
  //     'capital': '2.1亿',
  //     'listing_standard': '净利润不少于300万',
  //     'listing_period': '2-3个月',
  //     'domain': 'https://www.qhee.com'
  //   },
  //   {
  //     'name': '前海股权交易所',
  //     'pic': 'static/blockchain.jpg',
  //     'board': '新四板',
  //     'intro': '私募、直销',
  //     'capital': '2.1亿',
  //     'listing_standard': '净利润不少于300万',
  //     'listing_period': '2-3个月',
  //     'domain': 'https://www.qhee.com'
  //   },
  //   {
  //     'name': '前海股权交易所',
  //     'pic': 'static/blockchain.jpg',
  //     'board': '新四板',
  //     'intro': '私募、直销',
  //     'capital': '2.1亿',
  //     'listing_standard': '净利润不少于300万',
  //     'listing_period': '2-3个月',
  //     'domain': 'https://www.qhee.com'
  //   },
  //   {
  //     'name': '前海股权交易所',
  //     'pic': 'static/blockchain.jpg',
  //     'board': '新四板',
  //     'intro': '私募、直销',
  //     'capital': '2.1亿',
  //     'listing_standard': '净利润不少于300万',
  //     'listing_period': '2-3个月',
  //     'domain': 'https://www.qhee.com'
  //   },
  //   {
  //     'name': '前海股权交易所',
  //     'pic': 'static/blockchain.jpg',
  //     'board': '新四板',
  //     'intro': '私募、直销',
  //     'capital': '2.1亿',
  //     'listing_standard': '净利润不少于300万',
  //     'listing_period': '2-3个月',
  //     'domain': 'https://www.qhee.com'
  //   },
  //   {
  //     'name': '前海股权交易所',
  //     'pic': 'static/blockchain.jpg',
  //     'board': '新四板',
  //     'intro': '私募、直销',
  //     'capital': '2.1亿',
  //     'listing_standard': '净利润不少于300万',
  //     'listing_period': '2-3个月',
  //     'domain': 'https://www.qhee.com'
  //   },
  //   {
  //     'name': '前海股权交易所',
  //     'pic': 'static/blockchain.jpg',
  //     'board': '新四板',
  //     'intro': '私募、直销',
  //     'capital': '2.1亿',
  //     'listing_standard': '净利润不少于300万',
  //     'listing_period': '2-3个月',
  //     'domain': 'https://www.qhee.com'
  //   }
  // ],
  // exchangeRate: {
  //   'USDT': {
  //     'marketcap': 22.930,
  //     'exchange_name': 'ShanWoo',
  //     'exchange_code': 'WOO',
  //     'currency_name': 'USDT',
  //     'currency_code': 'USDT',
  //     'price': '200',
  //     'price_percent': '+10.05%',
  //     'high': '200.19',
  //     'low': '199.16',
  //     '24H': '583040',
  //     'vol': '10.76',
  //     'logo': '/img/cslogo/huobipro.png?v=1179',
  //     'domain': 'https://www.usdt.com'
  //   },
  //   'ETH': {
  //     'marketcap': 22.930,
  //     'exchange_name': 'ShanWoo',
  //     'exchange_code': 'WOO',
  //     'currency_name': 'ETH',
  //     'currency_code': 'ETH',
  //     'price': '200',
  //     'price_percent': '+10.05%',
  //     'high': '200.19',
  //     'low': '199.16',
  //     '24H': '583040',
  //     'vol': '10.76',
  //     'logo': '/img/cslogo/huobipro.png?v=1179',
  //     'domain': 'https://www.usdt.com'
  //   }
  // },
  // transactions: [
  //   {
  //     'datetime': 'Sep-21-2018 03:22:13 AM +UTC',
  //     'txhash': '0xa2cc6d8c5479449304c5075ace8c6eaeec34a535c3e1cf910b70bba03d499984',
  //     'from': '0x18675c17006179ce41003bbabab42561d40109c5',
  //     'to': '0x18000586dfc4da3575f62f826d6a4c61f17926cc',
  //     'value': '0.01 Ether ($2.23)'
  //   },
  //   {
  //     'datetime': 'Sep-22-2018 03:22:13 AM +UTC',
  //     'txhash': '0xa2cc6d8c5479449304c5075ace8c6eaeec34a535c3e1cf910b70bba03d499984',
  //     'from': '0x18675c17006179ce41003bbabab42561d40109c5',
  //     'to': '0x18000586dfc4da3575f62f826d6a4c61f17926cc',
  //     'value': '0.01 Ether ($2.23)'
  //   },
  //   {
  //     'datetime': 'Sep-23-2018 03:22:13 AM +UTC',
  //     'txhash': '0xa2cc6d8c5479449304c5075ace8c6eaeec34a535c3e1cf910b70bba03d499984',
  //     'from': '0x18675c17006179ce41003bbabab42561d40109c5',
  //     'to': '0x18000586dfc4da3575f62f826d6a4c61f17926cc',
  //     'value': '0.01 Ether ($2.23)'
  //   },
  //   {
  //     'datetime': 'Sep-24-2018 03:22:13 AM +UTC',
  //     'txhash': '0xa2cc6d8c5479449304c5075ace8c6eaeec34a535c3e1cf910b70bba03d499984',
  //     'from': '0x18675c17006179ce41003bbabab42561d40109c5',
  //     'to': '0x18000586dfc4da3575f62f826d6a4c61f17926cc',
  //     'value': '0.01 Ether ($2.23)'
  //   },
  //   {
  //     'datetime': 'Sep-25-2018 03:22:13 AM +UTC',
  //     'txhash': '0xa2cc6d8c5479449304c5075ace8c6eaeec34a535c3e1cf910b70bba03d499984',
  //     'from': '0x18675c17006179ce41003bbabab42561d40109c5',
  //     'to': '0x18000586dfc4da3575f62f826d6a4c61f17926cc',
  //     'value': '0.01 Ether ($2.23)'
  //   }
  // ],
  partners: [],
  markets: [],
  exchangeRate: {},
  transactions: [],
  web3: {
    isInjected: false,
    web3Instance: null,
    networkId: null,
    coinbase: null,
    balance: null,
    error: null
  },
  contractInstance: null
}

export default state
