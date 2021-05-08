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
      <header className="App-header">

        <h1>Demo2</h1>

        <h4>
          React 团队主要推荐这些解决方案：
      </h4>

        <ul>
          <li>如果你是在学习 React 或创建一个新的单页应用，请使用 Create React App。</li>
          <li>如果你是在用 Node.js 构建服务端渲染的网站，试试 Next.js。</li>
          <li>如果你是在构建内容主导的静态网站，试试 Gatsby。</li>
          <li>如果你是在打造组件库或将 React 集成到现有代码仓库，尝试更灵活的工具链。</li>
        </ul>

        <h5>从头开始打造工具链</h5>
        <p>一组 JavaScript 构建工具链通常由这些组成：</p>

        <ul>
          <li>一个 package 管理器，比如 Yarn 或 npm。它能让你充分利用庞大的第三方 package 的生态系统，并且轻松地安装或更新它们。</li>
          <li>一个打包器，比如 webpack 或 Parcel。它能让你编写模块化代码，并将它们组合在一起成为小的 package，以优化加载时间。</li>
          <li>一个编译器，例如 Babel。它能让你编写的新版本 JavaScript 代码，在旧版浏览器中依然能够工作。</li>
        </ul>

      </header>

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
