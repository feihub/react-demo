// the hook
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Counter } from './../counter/Counter';
import { Home } from './../home/Home';
import { Top } from './../top/Top';
import { LoginFrom } from './../login/LoginFrom';
import { ShowFrom } from './../login/ShowFrom';
import { useAppSelector, useAppDispatch } from './../../store/store';
import { ListGroup, Nav, ButtonGroup, Button } from 'react-bootstrap';
import {
  selectTheme,
} from './component/theme/themeSlice';

function App() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);

  return (
    <BrowserRouter>
      <Top />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/counter">
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
    </BrowserRouter>
  );
}

export default App;
