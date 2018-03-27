pragma solidity ^0.4.18;
// We have to specify what version of compiler this code will compile with

contract Vaccine {

  struct vaccination {
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
  mapping (uint => person) persons;

  function newPerson(bytes32 name) public returns (uint personID) {
    personID = numberOfPersons ++;
    persons[personID] = person(name, 0);
  }

  function getPersonName(uint personID) view public returns (bytes32 personName) {
    return persons[personID].name;
  }

  function newVaccination(uint personID, bytes32 name, bytes32 dateGiven, uint daysOfEffectiveness)  public{
    person storage Person = persons[personID];
    Person.numberOfVaccinations ++;
    Person.vaccinations[Person.numberOfVaccinations] = vaccination(name, dateGiven, daysOfEffectiveness);
  }

}