pragma solidity ^0.4.18;

contract Vaccine {

  struct vaccination{
    bytes32 name;
    bytes32 dateGiven;
    uint daysOfEffectiveness;
  }

  struct person {
    bytes32 name;
    uint numberOfVaccinations;
    mapping (uint => vaccination) vaccinations;
  }

  uint numberOfPersons;
  mapping (uint => person) public persons;

  function newPerson(bytes32 name) public returns (uint personID) {
    personID = numberOfPersons ++;
    persons[personID] = person(name, 0);
  }

  function getPersonName(uint personID) view public returns (bytes32 personName) {
    return persons[personID].name;
  }

//Malformed runs me out of gas
  function newVaccination(uint personID, bytes32 name, bytes32 dateGiven, uint daysOfEffectiveness)  public {
    persons[personID].numberOfVaccinations ++;
    persons[1].vaccinations[1] = vaccination(name, dateGiven, daysOfEffectiveness);
//persons[personID].vaccinations[1] = newVac
  }
  
  function getVaccinationCount(uint personID) view public returns (uint numberOfVaccinations) {
    person storage Person = persons[personID];
    numberOfVaccinations = Person.numberOfVaccinations;
  }

}