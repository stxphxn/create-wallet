import * as bitcoin from '@/coins/Bitcoin.js'
import * as ethereum from '@/coins/Ethereum.js'

let wallet = bitcoin.generateHDWallet('TEST', mnemonic);
console.log(wallet);

let wallet2 = Ethereum.generateHDWallet('TEST', mnemonic);
console.log(wallet2);