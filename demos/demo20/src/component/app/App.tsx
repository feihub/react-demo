// the hook
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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
