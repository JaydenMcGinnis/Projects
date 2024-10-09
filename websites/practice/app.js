// Importing from exporter.js
import { greeting } from "./exporter.js";

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.hasJob = false;
  }

  get species() {
    "Homo spaiens";
  }

  static speciesSentance() {
    return `Humans are classified as ${this.species}`;
  }

  fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  setFirstName(firstname) {
    this.firstname = firstname;
  }

  setLastName(lastname) {
    this.lastname = lastname;
  }

  set setFullName(name) {
    name = name.split(" ");
    this.setFirstName(name[0]);
    this.setLastName(name[1]);
  }
}

const person1 = new Person("Jayden", "McGinnis");

class Worker extends Person {
  constructor(firstname, lastname, job) {
    super(firstname, lastname);
    this.job = job;
    this.hasJob = true;
  }

  setJob(job) {
    this.job = job;
  }
}

const person2 = new Worker("Jayden", "McGinnis", "Builder");
