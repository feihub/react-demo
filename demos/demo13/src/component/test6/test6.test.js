import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Test6 from "./test6";

let container = null;
beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("应渲染问候语", () => {
  act(() => {
    render(<Test6 />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<span>嘿，陌生人6</span>"`
  );

  act(() => {
    render(<Test6 name="Jenny" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<h1>你好，Jenny！6</h1>"`
  );

  act(() => {
    render(<Test6 name="Margaret" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<h1>你好，Margaret！6</h1>"`
  );
});
