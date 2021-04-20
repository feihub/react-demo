// import logo from './logo.svg';
import "./App.css";
import Greeting from "./components/Greeting";
import Title from "./components/Title";
import LoginControl from "./components/LoginControl";
import MailBox from "./components/MailBox";
import Warning from "./components/Warning";

function App() {
  const messages = ["react", "react-dom"];
  return (
    <div>
      <div>
        <Title titleText="1) If 或者条件运算符" />
        <Greeting isLoginIn={false} />
      </div>
      <div>
        <Title titleText="2) Props可以传递任何变量 & 三目运算" />
        <LoginControl />
      </div>
      <div>
        <Title titleText="3) &&/|| 运算符" />
        <MailBox unreadMessages={messages} />
      </div>
      <div>
        <Title titleText="4) render 方法直接返回 null，而不进行任何渲染" />
        <Warning warn="这个有warn" />
        <Warning />
      </div>
    </div>
  );
}

export default App;
