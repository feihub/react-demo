import React from 'react';
import NormalComponent from './NormalComponent';
import ContextComponent from './ContextComponent';
import ReduxComponent from './ReduxComponent';
import './App.css';

function App() {
  return (
    <div className="text-center">
     <NormalComponent />
     <ContextComponent />
     <ReduxComponent />
    </div>
  );
}

export default App;
