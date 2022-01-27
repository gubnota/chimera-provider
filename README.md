# How to use

This is a simple HTTP provider based on `eth-provider` and `ethereum-provider` packages made solely for development purposes to interact as Dapp without using Metamask or other compatible extensions.

To use it:

```sh
npm run build
```

Then import `public/chimeraProvider.js`, to use:

```js
window.eth_accounts = ['0x95e6FeeeBDD83a44EB7Ca87F3EEeC4632F4218A5']
window.ethereum = ChimeraProvider('https://bsc-dataseed1.ninicoin.io/')
// probably:
// window.web3 = new Web3(window.ethereum)
```
