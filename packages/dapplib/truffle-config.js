require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture story raise script uncle hunt cover army gate'; 
let testAccounts = [
"0xc02e36248b63f0c013f2197735e239d9d85367dd7793c730657afbdff528908b",
"0xf83b33f78012c29b70a1bda1f9932554207baa11a34876c94a51c27442cc2b1d",
"0x5f00329d1d607f38de418d17830e258bb054b28068bb4c6a8d7d3f13f162fd3a",
"0x28f0107c4241e097180420c0edfe5a6bd9717d7e22d01161de07403fbe4a2276",
"0x3c4a1494ab83bb43a9f532ac5bdf2ae9c034c8f3124c4af05705bf9d76949afb",
"0xeaac2aca0c11733995c8145918b2b60fa9d8f08ba79fa5e5e92d80637e9bca96",
"0x7588d527ff747789deb4340f92ff97c70800559e18cf2115e5971994655865a2",
"0x675c723df966b0957abac65443a243b00ce817585583e83a595b89267beec592",
"0xaa77d34900226186ab5d4577d298464a2a4263a9b51cb3f71b58e64fc6cf2b9f",
"0xd6dec417e55d6d8cee5ea9a5dd40f79cb0a839c83742668cf40a25f456c1a037"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
