import './i18n'
// the hook
import { useTranslation } from 'react-i18next';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Counter } from './features/counter/Counter';
import { Home } from './features/home/Home';
import { Top } from './features/top/Top';
import { LoginFrom } from './features/login/LoginFrom';
import { ShowFrom } from './features/login/ShowFrom';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {
  selectTheme,
} from './features/theme/themeSlice';

function App() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);

  return (
    <Router>
      <Top />
      <Switch>
        <Route exact path="/home">
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
      </Switch>
    </Router>
  );
}

export default App;
