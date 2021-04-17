import React from 'react';

class Update extends React.Component {

    constructor(props) {
        super(props);
        this.state = { info: "info", info2: "info2" }

        // this.props.test = "test";

        this.test2 = "test2";

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.changePropsTest = this.changePropsTest.bind(this);
        this.changeTest2 = this.changeTest2.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeState2 = this.changeState2.bind(this);

    }

    changePropsTest() {
        this.props.test = "test" + new Date().toLocaleTimeString();
    }

    changeTest2() {
        this.test2 = "test2" + new Date().toLocaleTimeString();
    }

    changeState() {
        this.setState({ info: "info" + new Date().toLocaleTimeString() });
    }

    changeState2() {
        this.setState({ info2: "info2" + new Date().toLocaleTimeString() });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="alert alert-info ">
                    <div className="row">This is Update</div>
                    <div className="row">props.test:{this.props.test}</div>
                    <div className="row">this.test2:{this.test2}</div>
                    <div className="row">state.info:{this.state.info}</div>
                    <div className="row">state.info2:{this.state.info2}</div>

                    <div className="alert ">

                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="btn btn-danger" onClick={this.changePropsTest}>change child propsTest</button>
                            <button type="button" className="btn btn-light" onClick={this.changeTest2}>change child test2</button>
                            <button type="button" className="btn btn-warning" onClick={this.changeState}>change child state</button>
                            <button type="button" className="btn btn-success" onClick={this.changeState2}>change child state2</button>

                        </div>

                    </div>
                </div>
            </div>);
    }
}

export default Update;