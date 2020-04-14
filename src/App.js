import React from 'react';
import './App.css';
// import Greet from "./components/Greet";
import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Counter from './components/Counter';
import Clock from './components/Clock';
// import FunctionClick from './components/FunctionClick';
// import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <Welcome name="Asish" />
      <Clock />
      {/* <FunctionClick/>
      <EventBind/> */}
  
    </div>
  );
}

export default App;
