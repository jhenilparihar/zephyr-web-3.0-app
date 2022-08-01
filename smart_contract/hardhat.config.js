// https://eth-goerli.g.alchemy.com/v2/cZvGmFGIQLUOhhhhQfrG_-QiQIa9rJmv

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/cZvGmFGIQLUOhhhhQfrG_-QiQIa9rJmv',
      accounts: ['2b5090b74867e753f289fea1a8b492d7989f392dfbb702d8d7d918f5b9530ecb']
    }
  }
}