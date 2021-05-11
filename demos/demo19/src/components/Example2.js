import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

function ErrorTest() {
    throw new Error('I crashed!');
    return <h1>NoError</h1>
}

const Example2 = () => {
    return <ErrorBoundary>
        <ErrorTest />
    </ErrorBoundary>;
}

export default Example2;
