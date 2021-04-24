import { Alert, Container } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  selectTheme,
} from '../theme/themeSlice';
import { Nav, ListGroup, Col } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import "./Home.css";
import { Right2 } from './Right2';
import { Right3 } from './Right3';

export function Right() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return (
    <div className='home-right home-right-items'>
      <Container fluid>
        <Switch>
          <Route path="/home/item1">
            <Right2 />
          </Route>
          <Route path="/home/item2">
            <Right3 />
          </Route>
          <Redirect to="/home/item1" />
        </Switch>
      </Container>
    </div>
  );
}
