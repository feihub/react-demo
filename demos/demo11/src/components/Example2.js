import React, { useState, useEffect} from "react";
function Example2() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [width, setWidth] = useState(new Date());
  const onChange = () => {
    setWidth(document.body.clientWidth);
    console.log(width);
  };

  useEffect(() => {
    // useEffect Hook
    // 使用浏览器的 API 更新页面标题
    let timer;
    document.title = `You clicked ${count} times`;
    console.log("useEffect...");
    timer = setTimeout(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearTimeout(timer); // 相当于class生命周期的 componentWillUnMount
    };
  }, [count]); // *第二个参数

  useEffect(() => {
    //添加监听事件，相当于componentDidMount和componentDidUpdate中的代码
    window.addEventListener("resize", onChange, false);
    //返回的函数用于解绑事件，相当于componentWillUnmount中的代码
    return () => {
      window.removeEventListener("resize", onChange, false);
    };
  });

  return (
    <div>
      <h5>Now is {date.toLocaleString()} .</h5>
      <h5>You clicked {count} times.</h5>
      <button
        className="btn bg-info"
        onClick={() => {
          setCount(count + 1);
          console.log("render(click)...");
        }}
      >
        Click Me
      </button>
    </div>
  );
}
/**
 * useEffect
 * React 在完成对 DOM 的更改后运行，第一次渲染的时候也会执行，也就是页面刷新就会打印一次‘useEffect...’
 * 触发事件更改也会运行，每次打印出‘render(click)...’，还会打印出‘useEffect...’
 *
 * 第二个参数：
 * 1）什么都不传，组件每次 render 之后 useEffect 都会调用，相当于 componentDidMount 和 componentDidUpdate
 * 2）传入一个空数组 [], 只会调用一次，相当于 componentDidMount 和 componentWillUnmount
 * 3）传入一个数组，其中包括变量，只有这些变量变动时，useEffect 才会执行
 * 更新 state 变量总是替换它而不是合并它
 */
export default Example2;
