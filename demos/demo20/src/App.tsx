import './i18n'
// the hook
import { useTranslation } from 'react-i18next';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Counter } from './component/counter/Counter';
import { Home } from './component/home/Home';
import { Top } from './component/top/Top';
import { LoginFrom } from './component/login/LoginFrom';
import { ShowFrom } from './component/login/ShowFrom';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { ListGroup, Nav, ButtonGroup, Button } from 'react-bootstrap';
import {
  selectTheme,
} from './component/theme/themeSlice';

function App() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);

  return (
    <HashRouter>
      <Top />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/clock">
          <Counter />
        </Route>
        <Route path="/login">
          <LoginFrom />
        </Route>
        <Route path="/show">
          <ShowFrom />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </HashRouter>
  );
}

export default App;
