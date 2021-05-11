import "./App.css";
import Title from "./components/Title";
import Example from "./components/Example";
import Example2n from "./components/Example2n";
import Example3n from "./components/Example3n";
import Example4n from "./components/Example4n";
import Example5n from "./components/Example5n";
import Example6n from "./components/Example6n";
import Example7n from "./components/Example7n";
import Example8n from "./components/Example8n";

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
            <Example2n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="Refs 转发" />
            <Example3n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="Fragments" />
            <Example4n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="Refs & DOM" />
            <Example5n />
        </div>
        <div className="row">
            <Title titleText="静态类型检查" />
            <Example6n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="严格模式" />
            <Example7n />
        </div>
        <div className="row">
            <Title titleText="API Reference" />
            <Example8n />
        </div>
    </div>
</div>
);
}

export default App;
