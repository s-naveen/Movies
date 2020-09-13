import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const [ values, setValues ] = useState("test");

  const fetchValues = async function() {
    let values = await axios.get("/api/test")
    console.log(values);
    setValues(values.data);
  }

  let test = fetchValues();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{values}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Nowss
        </a>
      </header>
    </div>
  );
}

export default App;
