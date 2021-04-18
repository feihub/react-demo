import React from "react";
export default class ButtonF extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  render() {
    return (
      <div>
        <h4>{this.state.count}</h4>
        <button type="button" className="btn btn-info" onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
