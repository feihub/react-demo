import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Counter } from './features/counter/Counter';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    {/* 2.配置redux store给React使用 */}
    <Provider store={store}>
      <HashRouter>
        <Route path="/home" component={App}></Route>
        <Route path="/clock" component={Counter}></Route>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
