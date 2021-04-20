import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Counter } from './features/counter/Counter';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* 2.配置redux store给React使用 */}
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clock">clock</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/clock">
              <Counter />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
