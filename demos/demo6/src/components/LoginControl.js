import React from "react";
import LoginInBtn from "./LoginInBtn";
import LoginOutBtn from "./LoginOutBtn";
import Greeting from "./Greeting";
export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginIn: false
    };
  }
  handelLoginIn = () => {
    this.setState({ isLoginIn: true });
  };
  handelLoginOut = () => {
    this.setState({ isLoginIn: false });
  };
  render() {
    const isLogin = this.state.isLoginIn;
    return (
      //   <div className="row">
      //     <div className="row col-12">
      //       <div className="col-12 col-sm-2 col-lg-2">
      //         <LoginInBtn onClick={this.handelLoginIn} />
      //       </div>
      //       <div className="col-12 col-sm-2 col-lg-2">
      //         <LoginOutBtn onClick={this.handelLoginOut} />
      //       </div>
      //       <div className="col-12 col-sm-3 col-lg-3">
      //         <Greeting isLoginIn={this.state.isLoginIn} />
      //       </div>
      //     </div>
      //   </div>
      <div className="row">
        <div className="row col-12">
          <div className="col-12 col-sm-2 col-lg-2">
            {isLogin ? (
              <LoginOutBtn onClick={this.handelLoginOut} />
            ) : (
              <LoginInBtn onClick={this.handelLoginIn} />
            )}
          </div>
          <div className="col-12 col-sm-3 col-lg-3">
            <Greeting isLoginIn={this.state.isLoginIn} />
          </div>
        </div>
      </div>
    );
  }
}
