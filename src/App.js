import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      < PersonCard lastName="Gonzalez" firstName="Rachel" age="24" hairColor="brown"/>
      <PersonCard lastName="Earls" firstName="Tyler" age="27" hairColor="brown"/>
      <PersonCard lastName="Sanrio" firstName="Gudetama" age="7" hairColor="no hair!"/>
      <PersonCard lastName="Smith" firstName="Maria" age="62" hairColor="pink"/>
    </div>
  );
}

export default App;
