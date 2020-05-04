import React from 'react';
import logo from './logo.svg';
import './App.css';

const office = ['Kelly', 'Creed', 'Stanley', 'Oscar', 'Michael', 'Jim', 'Darryl', 'Phyllis', 'Pam', 'Dwight', 'Angela', 'Andy', 'William', 'Ryan', 'Toby', 'Bob']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        <div>
          <h3>Searching thing</h3>
          <div className="containerDiv">
            <input type="text" onKeyUp={onKeyUp}/>
            <div id="nameContainer"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

// some search things
const appendNodes = (officeList) => {
  let container = document.getElementById('nameContainer');

  if(officeList !== "no results"){
    container.innerText = "";
    officeList.map((name) => {
      let p = document.createElement("p");
      p.innerText = name;
      container.appendChild(p);
    })
  } else {
    container.innerText = "no results";
  }
}

// load into DOM
document.addEventListener("DOMContentLoaded", () => {
  appendNodes(office);
})

// filter function
const onKeyUp = (e) => {
  let filtered = office.filter(x => {
    let str = e.target.value.toLowerCase();

    let xSub = x.substring(0, 3).toLowerCase();
     return x.toLowerCase().includes(str) ||
    checkName(xSub, str);
  });
  
  if (filtered.length > 0) appendNodes(filtered);
  else appendNodes("no results");
}

// using regex 
// to match first 3 letters of search string
const checkName = (name, str) => {
  let pattern = str.split('').map( x =>
    `(?=.*${x})`).join('');

  let regex = new RegExp(`${pattern}`, 'g');

  return name.match(regex);
}

// this is weird but i see its use on handling filtering
// create a new filtered list instead of using existing one

export default App;
