
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

contractInstance.newPerson("rick", {from: web3.eth.accounts[0]} )