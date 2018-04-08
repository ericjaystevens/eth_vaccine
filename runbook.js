# start ./node_modules/.bin/ganache-cli --gaslimit 2000000000

https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcontract

Web3 = require('web3')
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://172.16.2.130:8545"));
}

code = fs.readFileSync('vaccine.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)

abiDefinition = JSON.parse(compiledCode.contracts[':Vaccine'].interface)
vaccineContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Vaccine'].bytecode
deployedContract = vaccineContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 3000000})
contractInstance = vaccineContract.at(deployedContract.address)

// stack underflow is back
idOfRick = contractInstance.newPerson("rick", {from: web3.eth.accounts[0]} )
console.log(web3.toAscii(contractInstance.getPersonName(0)))

contractInstance.newVaccination(1, "flue Shot", "7/4/2019", 35, {from: web3.eth.accounts[1]})
contractInstance.getVaccinationCount(idOfRick) 

