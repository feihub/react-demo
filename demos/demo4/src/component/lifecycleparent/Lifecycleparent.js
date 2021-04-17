import React from 'react';
import Lifecycle from '../lifecycle/Lifecycle';

class Lifecycleparent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { info: true };
        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        this.setState({ info: !this.state.info });
    }

    render() {

        if (this.state.info) {
            return (
                <div className="container-fluid">
                    <div className="alert alert-info">
                        <button type="button" className="btn btn-success" onClick={this.changeState}>change lifecycleparent state</button>
                        <Lifecycle className="row" />
                    </div></div>

            );
        } else {
            return (
                <div className="container-fluid">
                    <div className="alert alert-info">
                        <button type="button" className="btn btn-success" onClick={this.changeState}>change lifecycleparent state</button>
                    </div></div>

            );
        }


    }

}

export default Lifecycleparent;