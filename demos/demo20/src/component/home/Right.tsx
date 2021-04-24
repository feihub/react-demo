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

export function Right() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return (
    <div className='home-right home-right-items'>
      <Container fluid>
        <Switch>
          <Route path="/home/item1">
            <ListGroup >
              <ListGroup.Item className='border-0 py-0 bg-none'><Nav.Link className="text-secondary" href="#item11">{t('Component')}</Nav.Link></ListGroup.Item>
              <ListGroup.Item className='border-0 py-0'>
                <Nav.Link className="text-secondary" href="#item12">{t('Lifecycle')}</Nav.Link>
                <ListGroup >
                  <ListGroup.Item className='border-0 py-0'><Nav.Link className="text-secondary" href="#item13">{t('State')}</Nav.Link></ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Route>
          <Route path="/home/item2">
            <ListGroup>
              <ListGroup.Item className='border-0 py-0'><Nav.Link className="text-secondary" href="#item21">{t('Example 1')}</Nav.Link></ListGroup.Item>
            </ListGroup>
          </Route>
          <Redirect to="/home/item1" />
        </Switch>
      </Container>
    </div>
  );
}
