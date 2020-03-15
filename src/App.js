import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Asish" Alias = "Asi">This isthe child element</Greet>
      <Greet name="Anumol" Alias = "Anu"><button>Child</button></Greet>
      <Welcome name="Asish"/>
      <Welcome name="Anu"/>
      {/* <Hello /> */}
     
    </div>
  );
}

export default App;
