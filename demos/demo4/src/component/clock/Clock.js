import React from 'react';

class Clock extends React.Component {

  constructor(props){
    super(props);
    // this.props.other = "other";
    this.state={time:new Date().toLocaleTimeString()};
  }

  componentDidMount(){
    this.timeID = setInterval(()=> this.change(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.timeID);
  }

  change(){
    this.setState({time:new Date().toLocaleTimeString()});
  }

  render(){
    return(
      <div>
        <div>{this.state.time}</div>
      </div>
    );
  }

}

export default Clock;
