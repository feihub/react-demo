import './App.css';
import Test from './component/test/test';
import Test2 from './component/test2/test2';
import Test3 from './component/test3/test3';
import Test4 from './component/test4/test4';
import Test5 from './component/test5/test5';
import Test6 from './component/test6/test6';
import Test7 from './component/test7/test7';

function App() {

  let onSelect = () =>{
    console.log("this is onSelect");
  }

  let onChange = () =>{
    console.log("this is onChange");
  }


  return (
    <div className="App bg-light p-5" >
        <h1 className="bg-info">测试react组件的方法分两类：</h1>
        <p>渲染组件树：在一个简化的测试环境中渲染组件数并对它们输出做出断言检查。<br />
        运行完整的应用：在一个真实的浏览器环境中运行整个应用（也被称为端到端测试end-to-end）<br />

        主要关注第一种测试策略：<br />

        Jest是一个JavaScriput测试运行器。它允许jsdom操作DOM。<br/>

        React测试库是一组能让你不依赖React 组件具体实现对他们进行测试的辅助工具。<br/>

        React 组件的常见测试模式：<br/></p>

        <ul>
          <li>创建/清理</li>
          <li>act()</li>
          <li>渲染</li>
          <li>数据获取</li>
          <li>mock 模块</li>
          <li>事件</li>
          <li>计时器</li>
          <li>快照测试</li>
          <li>多渲染器</li>
        </ul>
        <Test/><br/>
        <Test2/><br/>
        <Test3/><br/>
        <Test4 onChange={onChange}/><br/>
        <Test5 onSelect={onSelect}/><br/>
        <Test6 /><br/>
        <Test7 /><br/>
      </div>
  );
}

export default App;
