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
import { Form, Button } from 'react-bootstrap';

export function ShowFrom() {

  const { t, i18n } = useTranslation();

  const login = useAppSelector(selectLogin);
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return (

    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>{t('Name')}</Form.Label>
        <Form.Control type="name" plaintext readOnly />
        <Form.Text className="text-muted">
          {t('We\'ll never share your email with anyone else')}.
          </Form.Text>
      </Form.Group>

    </Form>

  );

}
