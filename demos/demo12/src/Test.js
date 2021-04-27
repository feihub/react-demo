import React from 'react';

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = { info: 'test' };
    }

    render() {
        return (
            <div>{this.state.info}</div>
            <div>{this.props.info}</div>
        );
    }


}

export default Test;
