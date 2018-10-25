import Web3 from 'web3'
import { address, ABI } from './constants/shanwooContract'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let shanwooContract = web3.eth.contract(ABI)
  let shanwooContractInstance = shanwooContract.at(address)
  console.log(shanwooContract)
  console.log(shanwooContractInstance)
  resolve(shanwooContractInstance)
})

export default getContract
