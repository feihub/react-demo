import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Tick from "./components/tick/Tick";
import ImageD from "./components/image/ImageD";

function App() {
  // JSX 单元素
  // 第一种 变量声明 基础写法+嵌入表达式 {}
  const welcomValue = "react-demo1-JSX & basic component";
  const element = <h1>Hello, {welcomValue}</h1>;
  // 第二种 函数
  function element2(flag) {
    if (flag) {
      return <h1>Hello, {welcomValue}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  // JSX 多元素
  // const element3 = (
  //   <div name="element3">
  //     <h1 key="one">I am one!</h1>
  //     <span key="spanWel">{welcomValue}</span>
  //   </div>
  // );
  // 等同于 React.createElement
  const child = <span key="spanWel">{welcomValue}</span>;
  const element3 = React.createElement(
    "div",
    { name: "element3" },
    [
      React.createElement("h1", { id: "one", key: "one" }, "Hello, I am one!"),
      child
    ] // children
  );
  const imgInfo = {
    src: logo,
    alt: "logo",
    width: 20,
    height: 20
  };

  return (
    <div className="App">
      <header className="App-header">{element3}</header>

      <section className="App-sec">
        <ImageD imgInfo={imgInfo}></ImageD>
        <Tick date={new Date()}></Tick>
      </section>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
