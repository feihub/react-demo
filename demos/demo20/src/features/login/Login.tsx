import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';

export function Login() {

const { t, i18n } = useTranslation();
      
const login = useAppSelector(selectLogin);
const theme = useAppSelector(selectTheme);
const dispatch = useAppDispatch();

return (

      {if(!login){
      
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
                  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
}else {
      
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" plaintext readOnly />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
       
      }
      }
);

}
