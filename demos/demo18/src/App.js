import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

      constructor(props) {
        super(props);
        this.state = { info: "Lifecycle" };
        this.changeState = this.changeState.bind(this);
    }
  
      changeState() {
        this.setState({ info: "Lifecycle" + new Date().toLocaleTimeString() });
    }
  
      componentDidMount() {

    }
  
     render() {
      return (
        <div className="App">
            {this.state.info}
        </div>
      );
     }
}

export default App;
