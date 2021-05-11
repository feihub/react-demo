import "./App.css";
import Title from "./components/Title";
import ExampleCount from "./components/ExampleCount";
import ExampleCount2n from "./components/ExampleCount2n";
import ExampleCount3n from "./components/ExampleCount3n";
import ExampleCount4n from "./components/ExampleCount4n";
import ExampleCount5n from "./components/ExampleCount5n";
import ExampleCount6n from "./components/ExampleCount6n";
import ExampleCount7n from "./components/ExampleCount7n";
import ExampleCount8n from "./components/ExampleCount8n";

function App() {
return (
<div className="App">
    <div className="App-header">React Hooks</div>
    <div className="container">
        <div className="row">
            <Title titleText="Context" />
            <ExampleCount />
        </div>
        <div className="row">
            <Title titleText="错误边界" />
            <ExampleCount2n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="Refs 转发" />
            <ExampleCount3n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="Fragments" />
            <ExampleCount4n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="Refs & DOM" />
            <ExampleCount5n />
        </div>
        <div className="row">
            <Title titleText="静态类型检查" />
            <ExampleCount6n />
        </div>
        <div className="row">
            <hr>
            </hr>
        </div>
        <div className="row">
            <Title titleText="严格模式" />
            <ExampleCount7n />
        </div>
        <div className="row">
            <Title titleText="API Reference" />
            <ExampleCount8n />
        </div>
    </div>
</div>
);
}

export default App;
