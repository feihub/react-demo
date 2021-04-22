import React from "react";
import NameForm from "./NameForm"; // 普通html组件
import NameFormC from "./NameFormC"; // 受控组件
import InfoControl from "./InfoControl"; // 综合处理受控组件
import InfoNotControl from "./InfoNotControl"; // 非受控组件
import Title from "./Title";
export default class FormControl extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          <Title titleText="1） 普通的表单"></Title>
          <NameForm />
        </div>
        <div className="row">
          <Title titleText="2-1） 受控组件"></Title>
          <NameFormC />
          <Title titleText="2-2） 综合处理受控组件"></Title>
          <InfoControl />
        </div>
        <div className="row">
          <Title titleText="3） 非受控组件"></Title>
          <InfoNotControl />
        </div>
      </div>
    );
  }
}
