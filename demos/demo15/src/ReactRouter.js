import React from "react";
import { BrowserRouter, Route, Switch , Redirect } from "react-router-dom";
import Home from "./components/Home";
// import App from "./App";
import Myinfo from "./components/Myinfo";
import Friend from "./components/Friend";
import Messages from "./components/Messages";
import App from "./App";

class ReactRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <App />
          <Switch>
            <Route exact path="/home" component={Home} exact></Route>
            <Route path="/friend" component={Friend}></Route>
            <Route path="/my" component={Myinfo} exact></Route>
            <Route
              path="/message/:id/:count"
              component={Messages}
              exact
            ></Route>
            <Route path="/prompt"><Prompt message="Are you sure you want to leave?" /></Route>
            <Redirect to="/home" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
/**
 * NavLink - 1)activeClassName（string）：设置选中样式，默认值为 active；
 * NavLink - 2)activeStyle（object）：当元素被选中时, 为此元素添加样式；
 * NavLink - 3)isActive（func）：判断链接是否激活的额外逻辑的功能；以及 exact， strict
 *
 * Link - 1) to（string/object）：要跳转的路径或地址；
 * Link - 2) replace（bool）：为 true 时，点击链接后将使用新地址替换掉访问历史记录里面的原地址；
 *           为 false 时，点击链接后将在原有访问历史记录的基础上添加一个新的纪录。默认为 false；
 *
 * Switch
 */
export default ReactRouter;
