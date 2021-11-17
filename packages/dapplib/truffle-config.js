require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong radar muscle clump inside light army gentle'; 
let testAccounts = [
"0xff6f918136e191efdf292742ab5a8cfc3f861aa051f7a1d391da60c8a9df9871",
"0x656cf571da8bc55470635be463edb7c3e8850f0a36821e2daaa7b72404599677",
"0x659dd4b2abd0cbaff634051f26db223b12f445181fcde88a4be767654ba3f011",
"0xcb4fcf54828ccfa5dfb968a8970d9e51c2d766f0a09f06ca2963eb27aa0830da",
"0xd3bff9555782caaa81c4a0b78853a27d76ef22b1a1ca26b27060f90e98f25afc",
"0xd1477c7c7219ed92aee52150da04dcfec3b2d6f90936df7a23fefdd93e5d8194",
"0xb1f2f432b3e05cbcd42d14bffa3157899eab442c4333b3fe1c0cd8d2e061d5b1",
"0xfa491b3b9aac6acf73eda9886ff1d0c25b283eecf3ddcec772b10fa6a23d64a0",
"0x1c50637592b4b8e6fd8ebce6fd1f278abf70877a3a5c38b94ceb537c97b45f21",
"0xd4ce9d00d64577de5e60aa47f60fc7fdcfed327b552bf846628f128bcd28acab"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


