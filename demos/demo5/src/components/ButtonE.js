import React from "react";
export default class ButtonE extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
      console.log(arguments);
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  render() {
    return (
      <div>
        <h4>{this.state.count}</h4>
        <button type="button" className="btn btn-info" onClick={this.handleClick.bind(this)}>Click Me</button>
        <button type="button" className="btn btn-info" onClick={e => this.handleClick(e)}>Click Me</button>
        <button type="button" className="btn btn-info" onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
