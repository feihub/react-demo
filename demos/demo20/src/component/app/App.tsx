import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Counter } from './../counter/Counter';
import { Home } from './../home/Home';
import { Top } from './../top/Top';
import { LoginFrom } from './../login/LoginFrom';
import { ShowFrom } from './../login/ShowFrom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Container } from 'react-bootstrap';
import {
  primary,
  secondary,
  success,
  warning,
  danger,
  info,
  light,
  dark,
  selectTheme,
} from '../theme/themeSlice';
import './App.css'

function App() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);

  return (

      <BrowserRouter>
        <Top />
        <Container className={theme.headTheme === info ? "bg-light app-container" : "bg-dark app-container"} fluid>
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
        </Container>
      </BrowserRouter>

  );
}

export default App;
