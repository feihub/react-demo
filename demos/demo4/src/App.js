import React from 'react';
import Clock from './component/clock/Clock';
import Parent from './component/parent/Parent';
import Title from './component/title/Title';
import Update from './component/update/Update';
import Lifecycleparent from './component/lifecycleparent/Lifecycleparent';


function App() {
  return (
    <div className="container-fluid">
      <Title className="row" />
      <Clock className="row" />
      <Clock className="row" />
      <Parent className="row" />
      {/* <Parent className="row" other="other"/> */}
      <Update className="row" other="other" />
      <Lifecycleparent className="row" />
    </div>
  );
}

export default App;