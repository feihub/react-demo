import React from 'react';
import { Button } from 'react-bootstrap';

export default class NormalComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state={theme:"info"};
    this.change = this.change.bind(this);
  }

  change(){
    if(this.state.theme==='dark'){
      this.setState({theme:"info"});
    }else {
      this.setState({theme:"dark"});
    }
  }

  render() {
    return <Toolbar theme={this.state.theme} change={this.change}/>;
  }
}

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton theme={props.theme} change={props.change}/>
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button variant={this.props.theme} onClick={this.props.change}> NormalComponent </Button>;
  }
}
