import React from 'react';
import './App.css';
import Clock from './component/clock/Clock';
import Parent from './component/parent/Parent';
import Title from './component/title/Title';

function App() {
    return(
      <div className="container-fluid">
        <Title className="row"/>
        <Clock className="row"/>
        <Clock className="row"/>
        <Parent className="row"/>
        {/* <Parent className="row" other="other"/> */}
      </div>
    );
}

export default App;