// the hook
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  selectTheme,
} from '../theme/themeSlice';
import {
  logout,
  selectLogin,
} from '../login/loginSlice';
import { Dropdown, Image, ButtonGroup, Button } from 'react-bootstrap';

export function NavLogin() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);
  const login = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();

  const logoutNow = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
    if (eventKey === '2') {
      dispatch(logout());
    }
  };

  if (!login) {
    return <Nav.Link as={Button} href="#/login">{t('Login')}</Nav.Link>;
  } else {
    return < Dropdown as={ButtonGroup}>
      <Image src="holder.js/171x180" roundedCircle />
      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
      <Dropdown.Menu onSelect={logoutNow} >
        <Dropdown.Item eventKey="1" href="#/show">{t('User Info')}</Dropdown.Item>
        <Dropdown.Item eventKey="2" >{t('Logout')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown >;
  }

}
