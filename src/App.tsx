import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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

const objArr: Array<Person> = [];

const addPerson = (person: Person) => {
   objArr.push(person)
}

addPerson(randy)
addPerson(ryan)
addPerson(woozle)


function App() {
const [people, setPeople]  = useState<Array<Person>>(objArr)

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
      {people.map(el => (
        <div data-testid="people" key={el.name} style={{margin: "2rem 0rem"}}>
        <h3>{el.name}</h3>
        <p>{el.location}</p>
        <p>{el.getAge()}</p>
        </div>
      ))}
      </header>
    </div>
  );
}

export default App;
