import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Test from "./test";

//创建/清理
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


//act() 渲染
it("渲染有或无名称", () => {
    act(() => {
        render(<Test />, container);
    });
    expect(container.textContent).toBe("嘿，陌生人");

    act(() => {
        render(<Test name="Jenny" />, container);
      });
      expect(container.textContent).toBe("你好，Jenny！");
    
      act(() => {
        render(<Test name="Margaret" />, container);
      });
      expect(container.textContent).toBe("你好，Margaret！");

});