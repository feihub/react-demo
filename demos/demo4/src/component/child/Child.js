import React from 'react';

class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = { info: "ChildTest" }

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.changeProps = this.changeProps.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeState2 = this.changeState2.bind(this);

    }

    changeProps() {
        this.props.info = "ChildTest" + new Date().toLocaleTimeString();
    }

    changeState() {
        //this.state = {info:"ChildTest"+ new Date().toLocaleTimeString()};
        this.state.info = "ChildTest" + new Date().toLocaleTimeString();
    }

    changeState2() {
        this.setState({ info: "ChildTest" + new Date().toLocaleTimeString() });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="alert alert-info ">
                    <div className="row">This is Child</div>
                    <div className="row">props.info:{this.props.info}</div>
                    <div className="row">props.other:{this.props.other}</div>
                    <div className="row">state:{this.state.info}</div>
                    <div className="row">props + state:{this.props.info + "----" + this.state.info}</div>

                    <div className="alert ">

                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="btn btn-danger" onClick={this.changeProps}>change child props</button>
                            <button type="button" className="btn btn-warning" onClick={this.changeState}>change child state</button>
                            <button type="button" className="btn btn-success" onClick={this.changeState2}>change child state2</button>

                        </div>

                    </div>
                </div>
            </div>);
    }
}

export default Child;