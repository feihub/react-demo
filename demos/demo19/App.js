import "./App.css";
import Title from "./components/Title";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5";
import Example6 from "./components/Example6";
import Example7 from "./components/Example7";
import Example8 from "./components/Example8";

function App() {
return (
<div className="App">
    <div className="App-header">React Hooks</div>
    <div className="container">
        <div className="row">
            <Title titleText="Context" />
            <Example />
        </div>
        <div className="row">
            <Title titleText="错误边界" />
            <Example2 />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="Refs 转发" />
            <Example3 />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="Fragments" />
            <Example4 />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="Refs & DOM" />
            <Example5 />
        </div>
        <div className="row">
            <Title titleText="静态类型检查" />
            <Example6 />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="严格模式" />
            <Example7 />
        </div>
        <div className="row">
            <Title titleText="API Reference" />
            <Example8 />
        </div>
    </div>
</div>
);
}

export default App;
