import React from 'react';

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = { infor: 'test' };
    }

    render() {
        return (
            <div>{this.state.infor}</div>
        );
    }


}

export default Test;