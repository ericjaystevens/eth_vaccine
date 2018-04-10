# start ./node_modules/.bin/ganache-cli --gaslimit 2000000000

https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcontract

Web3 = require('web3')
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    //web3 = new Web3(new Web3.providers.HttpProvider("http://172.16.2.130:8545"));
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
Web3 = require('web3'
web3 = new Web3(new Web3.providers.HttpProvider("http://patientblock.eastus.cloudapp.azure.com:8545"));
code = fs.readFileSync('vaccine.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)

abiDefinition = JSON.parse(compiledCode.contracts[':Vaccine'].interface)
vaccineContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Vaccine'].bytecode
deployedContract = vaccineContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 3000000})
contractInstance = vaccineContract.at(deployedContract.address)

contractInstance.getVaccinationCount().toString()
contractInstance.newVaccination("Tdap", "12/15/2009", {from: web3.eth.accounts[0]})
contractInstance.newVaccination("Rabies", "1/15/1999", {from: web3.eth.accounts[0]})
contractInstance.newVaccination("HPV9", "11/11/2011", {from: web3.eth.accounts[0]})
contractInstance.newVaccination("Typhoid Polysaccharide", "2/5/2003", {from: web3.eth.accounts[0]})

console.log(web3.toAscii(contractInstance.getVaccineName.call(1)))
console.log(web3.toAscii(contractInstance.getVaccineDate.call(1)))

