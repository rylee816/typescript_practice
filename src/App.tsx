import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonComponent from './PersonComponent';

type myObj = {
  name: string
  location: string
  birthYear: number
  getAge(): string | number
}

class Person implements myObj {
  name: string
  location: string
  birthYear: number

  constructor(name: string, location: string, birthYear: number){
    this.name = name;
    this.location = location;
    this.birthYear = birthYear
  }
  getAge(): string | number {
    return new Date().getFullYear() - this.birthYear
  }
}



const randy = new Person("Randy", "Detroit", 1977)
const ryan = new Person("Ryan", "Detroit", 1979)
const woozle = new Person("Woozle Boy", "Heaven", 2002)
const juno = new Person("Juno", "Grosse Pointe", 2015)

const objArr: Array<Person> = [];


const addPerson = (person: Person) => {
  objArr.push(person)
}

addPerson(randy)
addPerson(ryan)
addPerson(woozle)
addPerson(juno)


function App() {
const [people, setPeople]  = useState<Array<Person>>(objArr);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {people.map((el, index) => (
        <PersonComponent name={el.name} location={el.location} getAge={el.getAge()} data-testid={`people-${index}`} key={index} style={{margin: "2rem 0rem"}} />
      ))}
      </header>
    </div>
  );
}

export default App;
