# start ~/node_modules/.bin/ganache-cli

Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

code = fs.readFileSync('vaccine.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)

abiDefinition = JSON.parse(compiledCode.contracts[':Vaccine'].interface)
vaccineContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Vaccine'].bytecode
deployedContract = vaccineContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
contractInstance = vaccineContract.at(deployedContract.address)

idOfRick = contractInstance.newPerson("rick", {from: web3.eth.accounts[0]} )
console.log(web3.toAscii(contractInstance.getPersonName(0)))

contractInstance.newVaccination(0, "flue Shot", "7/4/2019", 35, {from: web3.eth.accounts[0]})

