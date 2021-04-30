import React from 'react';

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = { info: 'test_state' };
    }

    render() {
        return (
            <>
                <div>state.info: {this.state.info}</div>
                <div>props.info: {this.props.info}</div>
            </>
        );
    }


}

export default Test;
