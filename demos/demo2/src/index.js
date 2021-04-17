import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// JSX
const helloWordElement = <h1>Hello, World!</h1>; // React 元素
ReactDOM.render(helloWordElement, document.getElementById("root"));

// 多元素 用()括起来，并且只有一个外层包裹元素
const multiElement = (
  <div>
    I am Div!
    <h1>Hello, World!</h1>
    <span>I am Span!</span>
    <p>I am P!</p>
  </div>
); // React 元素

// React.createElement 等同于上面的multiElement元素创建
const createElement = React.createElement(
  "div",
  { name: "element3", className: "div" },
  "I am Div!",
  React.createElement("h1", { key: "one" }, "Hello, World!"),
  React.createElement("span", { key: "two" }, "I am Span!"),
  React.createElement("p", null, "I am P!")
  // children
);
/**
 * React.createElement
 * 如果第三个参数是个数组，来表示所有的子元素，那一定要加key，不然会报错提示
 */
const name = "Josh Perez";
const world = "world";
let flag = true;
function getUser(flag) {
  if (flag) {
    return name;
  }
  return world;
}
// ReactDOM.render(
//   <div>
//     I am Div!
//     <h1>Hello, {world}</h1>
//     <h1>Hello, {getUser(true)}</h1>
//     <span>I am Span! {flag + 0}</span>
//     <p className={flag + 0 == 1 ? "p1" : "p2"}>I am P!</p>
//   </div>,
//   document.getElementById("root")
// );

// 时钟更新栗子
function tick() {
  const ele = (
    <div>
      <h1>Hello, {getUser(true)}</h1>
      <span>It is {new Date().toLocaleTimeString()}.</span>
    </div>
  );
  ReactDOM.render(ele, document.getElementById("root"));
}
// tick();
// setInterval(() => {
//   tick();
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
