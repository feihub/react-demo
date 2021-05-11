import React, { useState, useEffect, useCallback, useMemo } from "react";
function Example3() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
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
  }); // *第二个参数

  const setCount2 = useCallback(() => {
    console.log("render(click)...");
    setCount(count + 1);
  }, [count]);

  const a = useMemo(() => {
    return count + 5;
  }, [count]);

  return (
    <div>
      <h5>Now is {date.toLocaleString()} .</h5>
      <h5>
        You clicked {count},{a} times.
      </h5>
      <button
        className="btn bg-info"
        // onClick={() => {
        //   setCount(count + 1);
        //   console.log("render(click)...");
        // }}
        onClick={setCount2}
      >
        Click Me
      </button>
    </div>
  );
}
/**
 * useCallback, useMemo
 * ---------------------- useCallback ---------------------------------------------
 *
 * ----------------------- useMemo -------------------------------------------------
 * 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。
 * 这种优化有助于避免在每次渲染时都进行高开销的计算。
 * 记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作
 */
export default Example3;
