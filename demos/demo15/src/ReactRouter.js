import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, useLocation, useParams, Prompt, useRouteMatch } from "react-router-dom";
import Home from "./components/Home";
// import App from "./App";
import Myinfo from "./components/Myinfo";
import Friend from "./components/Friend";
import Messages from "./components/Messages";
import App from "./App";

function ReactRouter() {
  return (
    <Router>
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
          <Route path="/home/:slug">
            <BlogPost2 />
          </Route>
          <BlogPost />
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

function BlogPost() {
  let match = useRouteMatch("/home2/:slug");
  let history = useHistory();
  let location = useLocation();
  // Do whatever you want with the match...

  if (match) {
    return <div className="container"><div className="row">
      <div>This is BlogPost</div>
      <div> history:{history.location.pathname}</div>
      <div> location:{location.pathname}</div>
    </div></div>
  }

  return <div />;
}

function BlogPost2() {
  let { slug } = useParams();
  // Do whatever you want with the match...
  return <div className="container"><div className="row">
    <div>This is BlogPost2</div>
    <div> slug:{slug}</div>
  </div></div>;
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
