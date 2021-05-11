// import logo from './logo.svg';
import "./App.css";
import Title from "./components/Title";
import ExampleCount from "./components/ExampleCount";
import ExampleCount2n from "./components/ExampleCount2n";
import ExampleCount3n from "./components/ExampleCount3n";
import ExampleCount4n from "./components/ExampleCount4n";
import ExampleCount5n from "./components/ExampleCount5n";
import ExampleCount6n from "./components/ExampleCount6n";
import ExampleColor from "./components/ExampleColor";
import ExampleChangeBg from "./components/ExampleChangeBg";

function App() {
return (
<div className="App">
    <div className="App-header">React Hooks</div>
    <div className="container">
        <div className="row">
            <Title titleText="简单的计数器：使用了useState Hook" />
            <ExampleCount />
        </div>
        <div className="row">
            <Title titleText="简单的计数器：使用了useReducer Hook" />
            <ExampleCount4n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="简单的计数器：使用了useEffect & useLayoutEffect Hook" />
            <ExampleCount2n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="简单的计数器：使用了useCallback & useMemo Hook" />
            <ExampleCount3n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="简单的计数器：使用了useContext & useImperativeHandle Hook" />
            <ExampleColor />
        </div>
        <div className="row">
            <Title titleText="简单的计数器：使用了useRef Hook" />
            <ExampleCount5n />
        </div>
        <div className="row">
            <Title titleText="简单的计数器：使用了useDebugValue Hook" />
            <ExampleCount6n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="简单的计数器：使用了自定义 Hook" />
            <ExampleChangeBg />
        </div>
    </div>
</div>
);
}

/**
* Hook 是 React 16.8 的新增特性
* 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
* 1)完全可选的
* 2)100% 向后兼容的
* 3)现在可用
* Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数
* Hook 在 class 内部是不起作用的。但你可以使用它们来取代 class 。
* 函数组件里使用Hook
*/

export default App;
