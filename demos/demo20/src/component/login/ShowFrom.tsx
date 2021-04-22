import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  selectTheme,
} from '../theme/themeSlice';
import {
  selectLogin,
} from './loginSlice';
import { Form, Container, Row } from 'react-bootstrap';

export function ShowFrom() {

  const { t, i18n } = useTranslation();

  const login = useAppSelector(selectLogin);
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Form className="mt-5">
          <Form.Group controlId="formBasicName">
            <Form.Label>{t('Name')}</Form.Label>
            <Form.Control type="name" readOnly value='Test User' />
            <Form.Text className="text-muted">
              {t('We\'ll never share your email with anyone else')}.
          </Form.Text>
          </Form.Group>
        </Form>
      </Row>
    </Container>

  );

}
