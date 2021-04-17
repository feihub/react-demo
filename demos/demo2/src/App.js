import "./App.css";
import React from "react";

function App() {
  // JSX
  const ele1 = <h1>Hello, World from ele1!</h1>; // React 元素
  const ele2 = (
    <div>
      I am Div from ele2!
      <h1>Hello, World from ele2!</h1>
      <span>I am Span from ele2!</span>
      <p>I am P from ele2!</p>
    </div>
  ); // React 元素
  // React.createElement 等同于上面的ele2元素创建
  const ele3 = React.createElement(
    "div",
    { name: "element3", className: "div" },
    "I am Div from ele3!",
    React.createElement("h1", { key: "one" }, "Hello, World from ele3!"),
    React.createElement("span", { key: "two" }, "I am Span from ele3!"),
    React.createElement("p", null, "I am P from ele3!")
    // children
  );
  const name = "Josh Perez";
  const world = "world";
  const flag = true;
  function getUser(flag) {
    if (flag) {
      return <h1 className="bg-name">Hello, {name}</h1>;
    }
    return <h1 className="bg-world">Hello, {world}</h1>;
  }

  return (
    <div className="App">
      <header className="App-header">Demo2</header>

      <section className="App-sec">
        {ele1}
        {ele2}
        {ele3}
        {getUser(false)}
        {flag + 1}
      </section>
    </div>
  );
}

export default App;
