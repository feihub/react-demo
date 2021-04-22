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
  const [theme, setTheme] = useState<string>('light');

  const changeTheme = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
    if (eventKey === '1') {
      setTheme('light');
    } else if (eventKey === '2') {
      setTheme('info');
    }
  };

  const changeLanguage = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
    if (eventKey === '1') {
      i18n.changeLanguage('en');
    } else if (eventKey === '2') {
      i18n.changeLanguage('zh');
    }
  };

  return (
    <Router>
      <Navbar bg={theme}>
        <Navbar.Brand href="#/">React-Demo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#/">{t('Home')}</Nav.Link>
            <Nav.Link href="#/clock">{t('Counter')}</Nav.Link>
          </Nav>
            <Navbar.Collapse className="justify-content-center me-5 pe-5">
              <Nav activeKey={theme === "light" ? "1" : "2"} onSelect={changeTheme}>
                <NavDropdown title={t('Theme')} id="basic-nav-dropdown-Theme">
                  <NavDropdown.Item eventKey="1">{t('light')}</NavDropdown.Item>
                  <NavDropdown.Item eventKey="2">{t('Info')}</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav activeKey={i18n.language === "en" ? "1" : "2"} onSelect={changeLanguage}>
                <NavDropdown title={t('Language')} id="basic-nav-dropdown-Language">
                  <NavDropdown.Item eventKey="1">English</NavDropdown.Item>
                  <NavDropdown.Item eventKey="2">中文</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/clock">
          <Counter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
