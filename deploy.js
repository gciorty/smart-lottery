const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');


const provider = new HDWalletProvider(
  'right gadget print code harvest moral episode avoid bless dismiss school little',
  'https://rinkeby.infura.io/v3/e1e6215d66654d7eb6afec59bb1d5d1c'
);

const web3 = new Web3(provider);


//create instance of the contract
const deploy = async () => {
  const accounts = await web3.eth.getAccounts(); //get accounts

  console.log('Attempting to deploy from accounts:', accounts[0]);

  const contractResult = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode }).send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to address: ', contractResult.options.address);
}
deploy();
