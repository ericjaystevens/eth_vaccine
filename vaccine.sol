pragma solidity ^0.4.18;

contract Vaccine {

  mapping (uint=>bytes32) vaccineNames;
  mapping (uint=>bytes32) dateGivens;

  uint numberOfVaccinations;

  function newVaccination(bytes32 _name, bytes32 _dateGiven )  public {
    uint vaccineID = numberOfVaccinations ++;
    vaccineNames[vaccineID] = _name;
    dateGivens[vaccineID] = _dateGiven;
  }
  
  function getVaccineName(uint vaccineID) view public returns (bytes32){
    return vaccineNames[vaccineID]; 
  }

  function getVaccineDate(uint vaccineID) view public returns (bytes32){
    return dateGivens[vaccineID]; 
  }

  function getVaccinationCount() view public returns (uint) {
    return numberOfVaccinations;
  }

}