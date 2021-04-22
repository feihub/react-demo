import './i18n'
// the hook
import { useTranslation } from 'react-i18next';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Counter } from './features/counter/Counter';
import { Home } from './features/home/home';
import { Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  const { t, i18n } = useTranslation();
  
  const theme = useAppSelector(selectTheme);

  return (
    <Router>
      <Top/ >
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/clock">
          <Counter />
        </Route>
        <Route path="/login">
            <Login />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
