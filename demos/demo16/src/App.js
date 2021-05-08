import React from 'react';
import NormalComponent from './NormalComponent';
import ContextComponent from './ContextComponent';
import ReduxComponent from './ReduxComponent';
import './App.css';

function App() {
  return (
    <div className="container text-center">
      <div className="row mt-5">
        <div className="col"><NormalComponent /></div>
        <div className="col"><ContextComponent /></div>
      </div>
      <div className="row mt-3"><ReduxComponent /></div>
    </div>
  );
}

export default App;
