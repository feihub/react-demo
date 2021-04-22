import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';

export function LogoutFrom() {

const { t, i18n } = useTranslation();
      
const login = useAppSelector(selectLogin);
const theme = useAppSelector(selectTheme);
const dispatch = useAppDispatch();

return (

     <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" plaintext readOnly />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

      </Form>

);

}