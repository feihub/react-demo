import { Alert, Container } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  selectTheme,
} from '../theme/themeSlice';
import { Nav, ListGroup, Col } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom'

export function Right() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return (

    <Container className = 'mt-3' fluid>
        <Switch>
          <Route path="/home/item1">
            <ListGroup defaultActiveKey="#item11">
              <ListGroup.Item className = 'border-0 py-0'><Nav.Link href="#item11">{t('Component')}</Nav.Link></ListGroup.Item>
              <ListGroup.Item className = 'border-0 py-0'>
                <Nav.Link href="#item12">{t('Lifecycle')}</Nav.Link>
                <ListGroup >
                  <ListGroup.Item  className = 'border-0 py-0'><Nav.Link href="#item13">{t('State')}</Nav.Link></ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Route>
          <Route path="/home/item2">
            <ListGroup defaultActiveKey="#item21">
              <ListGroup.Item className = 'border-0 py-0'><Nav.Link href="#item21">{t('Example1')}</Nav.Link></ListGroup.Item></ListGroup>
          </Route>
        </Switch>
    </Container>

  );
}
