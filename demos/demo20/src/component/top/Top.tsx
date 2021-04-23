// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  changeTheme,
  selectTheme,
} from '../theme/themeSlice';
import {
  selectLogin,
} from '../login/loginSlice';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLogin } from '../navlogin/NavLogin';
import { NavLink } from 'react-router-dom'


export function Top() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);
  const login = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();

  const changeThemeNow = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
    if (eventKey === '1') {
      dispatch(changeTheme('success'));
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

    <Navbar bg={theme} className="pr-5 pl-5">
      <Navbar.Brand >React-Demo</Navbar.Brand>
      <Nav className="flex-grow-1" defaultActiveKey="#/home">
        <Nav.Item>
          <NavLink to="/home">{t('Home')}</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/counter">{t('Counter')}</NavLink>
        </Nav.Item>
        <Nav.Item className="ml-auto"><Nav activeKey={theme === "success" ? "1" : "2"} onSelect={changeThemeNow}>
          <NavDropdown title={t('Theme')} id="basic-nav-dropdown-Theme">
            <NavDropdown.Item eventKey="1">{t('success')}</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">{t('info')}</NavDropdown.Item>
          </NavDropdown>
        </Nav></Nav.Item>
        <Nav.Item><Nav activeKey={i18n.language === "en" ? "1" : "2"} onSelect={changeLanguage}>
          <NavDropdown title={t('Language')} id="basic-nav-dropdown-Language">
            <NavDropdown.Item eventKey="1">English</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">中文</NavDropdown.Item>
          </NavDropdown>
        </Nav></Nav.Item>
        <Nav.Item className="mr-5"><NavLogin /></Nav.Item>
      </Nav>
    </Navbar >

  );

}
