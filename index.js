var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://40.71.31.167:8545"))

abi = JSON.parse('[{"constant":true,"inputs":[],"name":"getVaccinationCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"vaccineID","type":"uint256"}],"name":"getVaccineDate","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_dateGiven","type":"bytes32"}],"name":"newVaccination","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"vaccineID","type":"uint256"}],"name":"getVaccineName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]');
VaccineContract = web3.eth.contract(abi);
contractInstance = VaccineContract.at('0xe02a7ad5775e04b42daf26f9387ec2b6c0c832aa');

$(document).ready(function() {
    //let numberOfVaccines = contractInstance.getVaccinationCount().toString()
    var numberOfVaccines = 3
    var tableId = "vaccineTable";
    var rows = '<tr><th>Vaccine</th><th>Date Given</th></td>';
    for (i = 1; i <= numberOfVaccines; i++){
        var name = 'name' + i.toString(); 
        var dateGiven = 'today';
        var row = '<tr><td>' + web3.toAscii(contractInstance.getVaccineName.call(i)) + '</td><td>' + web3.toAscii(contractInstance.getVaccineDate.call(i)) + '</td></tr>' 
        rows += row;
    }
    $("#" + tableId).html(rows);
});