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
import { useHistory , NavLink } from "react-router-dom";

export function NavLogin() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);
  const login = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();

  let history = useHistory();

  const logoutNow = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
    if (eventKey === '2') {
      dispatch(logout());
      history.push("/home");
    }
  };

  if (!login) {
    return <Nav.Link as={Button} href="#/login">{t('Login')}</Nav.Link>;
  } else {
    return < Dropdown as={ButtonGroup}>
      <Button>Test User</Button>
      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
      <Dropdown.Menu >
        <Dropdown.Item eventKey="1" >
          <NavLink to="/show"><Image src="https://avatars.githubusercontent.com/u/24521545?s=20&v=4" fluid roundedCircle />{t('User Info')}</NavLink>
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onSelect={logoutNow} >{t('Logout')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown >;
  }

}
