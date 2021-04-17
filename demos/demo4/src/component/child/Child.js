import React from 'react';
import './Child.css';

class Child extends React.Component{
    
    constructor(props){
        super(props);
        this.state={info:"ChildTest"}

            // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.changeProps = this.changeProps.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeState2 = this.changeState2.bind(this);

    }

    changeProps(){
        this.props.info = "ChildTest" + new Date().toLocaleTimeString();
    }

    changeState(){
        //this.state = {info:"ChildTest"+ new Date().toLocaleTimeString()};
        this.state.info = "ChildTest"+ new Date().toLocaleTimeString();
    }

    changeState2(){
        this.setState({info:"ChildTest"+ new Date().toLocaleTimeString()});
    }

    render(){
        return (
        <div className ="child" >
            <div>This is Child</div>
            <div>props.info:{this.props.info}</div>
            <div>props.other:{this.props.other}</div>
            <div>state:{this.state.info}</div>
            <div>props + state:{this.props.info + "----" + this.state.info}</div>
            <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-default"  onClick={this.changeProps}>change child props</button>
                <button type="button" className="btn btn-default"  onClick={this.changeState}>change child state</button>
                <button type="button" className="btn btn-default"  onClick={this.changeState2}>change child state2</button>
            </div>
            

        </div>);
    }
}

export default Child;