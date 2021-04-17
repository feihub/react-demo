import React from 'react';
import Child from '../child/Child';
import './Parent.css';

class Parent extends React.Component{

    constructor(props){
        super(props);
        this.state={info:"ParentTest"};

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.changeProps = this.changeProps.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeState2 = this.changeState2.bind(this);

    }

    changeProps(){
        this.props.info = "ParentTest" + new Date().toLocaleTimeString();
    }

    changeState(){
        //this.state = {info:"ParentTest"+ new Date().toLocaleTimeString()};
        this.state.info = "ParentTest"+ new Date().toLocaleTimeString();
    }

    changeState2(){
        this.setState({info:"ParentTest"+ new Date().toLocaleTimeString()});
    }

    render(){
        return (
        <div className="parent">
            <div>This is Parent Top</div>
            <div>props.other:{this.props.other}</div>
            <div>state.info:{this.state.info}</div>
            <div>props + state:{this.props.other + "----" + this.state.info}</div>

            <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-default" onClick={this.changeProps}>change parent props</button>
                <button type="button" className="btn btn-default" onClick={this.changeState}>change parent state</button>
                <button type="button" className="btn btn-default" onClick={this.changeState2}>change parent state2</button>
            </div>

            <Child info={this.state.info} other={this.props.other}/>
            <div>This is Parent Bottom</div>
        </div>);
    }

}

export default Parent;