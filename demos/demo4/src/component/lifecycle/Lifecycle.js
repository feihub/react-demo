import React from 'react';

class Lifecycle extends React.Component {

    //挂载
    //当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

    constructor(props) {
        super(props);
        this.state = { info: "Lifecycle" };
        this.changeState = this.changeState.bind(this);

        console.log("------------------Lifecycle---------constructor");

    }

    static getDerivedStateFromProps(props, state) {
        console.log("------------------Lifecycle---------getDerivedStateFromProps");
    }

    changeState() {
        this.setState({ info: "Lifecycle" + new Date().toLocaleTimeString() });
        console.log("------------------Lifecycle---------changeState");
    }

    render() {

        console.log("------------------Lifecycle---------render");

        return (
            <div className="container-fluid">
                <div className="alert alert-light">
                    <div className="row">This is Lifecycle</div>
                    <div className="row">{this.state.info}</div>

                    <div className="alert alert-light ">
                        <button type="button" className="btn btn-warning" onClick={this.changeState}>change lifecycle state</button>
                    </div>

                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log("------------------Lifecycle---------componentDidMount");

    }

    //更新
    //当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

    static getDerivedStateFromProps(props, state) {

        console.log("------------------Lifecycle---------getDerivedStateFromProps");

        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log("------------------Lifecycle---------shouldComponentUpdate");

        return true;
    }


    //render(){}

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log("------------------Lifecycle---------getSnapshotBeforeUpdate");

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("------------------Lifecycle---------componentDidUpdate");
    }


    //卸载
    //当组件从 DOM 中移除时会调用如下方法:

    componentWillUnmount() {
        console.log("------------------Lifecycle---------componentWillUnmount");
    }

    //错误处理
    //当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

    static getDerivedStateFromError(error) {
        console.log("------------------Lifecycle---------getDerivedStateFromError");
    }

    componentDidCatch(error, info) {
        console.log("------------------Lifecycle---------componentDidCatch");
    }

    //setState()

    //forceUpdate()

    //defaultProps
    //defaultProps 可以为 Class 组件添加默认 props。这一般用于 props 未赋值，但又不能为 null 的情况。

    //displayName

    //props

    //state


}

export default Lifecycle;