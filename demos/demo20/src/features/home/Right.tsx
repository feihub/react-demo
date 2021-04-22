import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectTheme,
} from '../theme/themeSlice';
import { Nav, ListGroup, Col } from 'react-bootstrap';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

export function Right() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return (

    <Switch>
      <Route exact path="/home/item">
        <ListGroup as="ul" defaultActiveKey="#item_1">
          <ListGroup.Item as="li"><Nav.Link href="#item_1">{t('Component')}</Nav.Link></ListGroup.Item>
          <ListGroup.Item as="li">
            <Nav.Link href="#item_2">{t('State')}</Nav.Link>
            <ListGroup as="ul">
              <ListGroup.Item as="li"><Nav.Link href="#item_2_1">{t('seState')}</Nav.Link></ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Route>
      <Route path="/home/item2">
        <ListGroup as="ul" defaultActiveKey="#item2_1">
          <ListGroup.Item as="li"><Nav.Link href="#item2_1">{t('Example1')}</Nav.Link></ListGroup.Item></ListGroup>
      </Route>
    </Switch>

  );
}
