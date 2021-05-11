import React, { useState } from "react";
function Example() {
  const [count, setCount] = useState(0); // useState 就是一个Hook，这里使用解构，最好使用这种格式解构赋值
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]); // 可以声明多个
  return (
    <div>
      <h5>You clicked {count} times.</h5>
      <button
        className="btn bg-info"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
/**
 * useState
 * 返回一个变量和一个改变变量值的函数
 */
export default Example;
