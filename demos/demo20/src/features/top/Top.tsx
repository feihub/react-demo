// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  changeTheme,
  selectTheme,
} from '../theme/themeSlice';
import {
  selectLogin,
} from '../login/loginSlice';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLogin } from '../navlogin/NavLogin';


export function Top() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);
  const login = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();

  const changeThemeNow = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
    if (eventKey === '1') {
      dispatch(changeTheme('light'));
    } else if (eventKey === '2') {
      dispatch(changeTheme('info'));
    }
  };

  const changeLanguage = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
    if (eventKey === '1') {
      i18n.changeLanguage('en');
    } else if (eventKey === '2') {
      i18n.changeLanguage('zh');
    }
  };


  return (

    <Navbar bg={theme}>
      <Navbar.Brand href="#/">React-Demo</Navbar.Brand>
      <Nav defaultActiveKey="#/home">
        <Nav.Item><Nav.Link href="#/home">{t('Home')}</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#/clock">{t('Counter')}</Nav.Link></Nav.Item>
        <Nav.Item className="ms-auto"><Nav activeKey={theme === "light" ? "1" : "2"} onSelect={changeThemeNow}>
          <NavDropdown title={t('Theme')} id="basic-nav-dropdown-Theme">
            <NavDropdown.Item eventKey="1">{t('light')}</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">{t('Info')}</NavDropdown.Item>
          </NavDropdown>
        </Nav></Nav.Item>
        <Nav.Item><Nav activeKey={i18n.language === "en" ? "1" : "2"} onSelect={changeLanguage}>
          <NavDropdown title={t('Language')} id="basic-nav-dropdown-Language">
            <NavDropdown.Item eventKey="1">English</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">中文</NavDropdown.Item>
          </NavDropdown>
        </Nav></Nav.Item>
        <Nav.Item className="me-5"><NavLogin /></Nav.Item>
      </Nav>
    </Navbar >

  );

}
