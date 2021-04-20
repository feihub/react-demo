import logo from './logo.svg';
import './App.css';

//key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。
//key 只是在兄弟节点之间必须唯一。
//key 会传递信息给 React ，但不会传递给你的组件。
//a key should be provided for list items，意思是当你创建一个元素时，必须包括一个特殊的 key 属性。

//------------------------------------------------------------
function ListItem(props) {
  // 正確！你不需要在這裡指出 key：
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 正確！Key 應該在 array 內被指定。
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

//------------------------------------------------------------

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

//------------------------------------------------------------

function NumberList2(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

//------------------------------------------------------------

function NumberList3(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}

//------------------------------------------------------------


function NumberList4(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number, index) =>
        <ListItem key={index}
                  value={number} />
      )}
    </ul>
  );
}

//------------------------------------------------------------

function App() {
  return (
    <div className="App">
      <NumberList numbers={numbers} />
      <NumberList2 numbers={numbers} />
      <NumberList3 numbers={numbers} />
      <NumberList4 numbers={numbers} />
      <Blog posts={posts} />
    </div>
  );
}

export default App;
