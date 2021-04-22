import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  selectTheme,
} from '../theme/themeSlice';
import {
  login,
  selectLogin,
} from './loginSlice';
import { Form, Button } from 'react-bootstrap';

export function LoginFrom() {

  const { t, i18n } = useTranslation();

  const loginValue = useAppSelector(selectLogin);
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    dispatch(login());

  };

  return (

    <Form onSubmit={handleSubmit} >
      <Form.Group controlId="formBasicName">
        <Form.Label>{t('Name')}</Form.Label>
        <Form.Control type="name" placeholder={t('Enter name')} />
        <Form.Text className="text-muted">
          {t('We\'ll never share your info with anyone else.')}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>{t('Password')}</Form.Label>
        <Form.Control type="password" placeholder={t('Password')} />
      </Form.Group>

      <Button variant="primary" type="submit">
        {t('Submit')}
      </Button>
    </Form>
  );

}
