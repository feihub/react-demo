// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  changeToTheme1,
  changeToTheme2,
  theme1,
  theme2,
  primary,
  secondary,
  success,
  warning,
  danger,
  info,
  light,
  dark,
  selectTheme,
} from '../theme/themeSlice';
import {
  selectLogin,
} from '../login/loginSlice';
import { Container, Navbar, Nav, NavDropdown, Row } from 'react-bootstrap';
import { NavLogin } from '../navlogin/NavLogin';
import { Link } from 'react-router-dom';
import { IoLogoReact } from "react-icons/io5";


export function Top() {

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);
  const login = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();

  const changeThemeNow = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
    if (eventKey === '1') {
      dispatch(changeToTheme1());
    } else if (eventKey === '2') {
      dispatch(changeToTheme2());
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

    <Navbar bg={theme.headTheme} className="pr-5 pl-5">
      <Navbar.Brand ><Row className="align-items-center"><IoLogoReact />React-Demo</Row></Navbar.Brand>
      <Nav className="flex-grow-1 align-items-center ml-5">
        <Nav.Item>
          <Nav.Link className="bg-success  "><Link className="text-dark" to="/home">{t('Home')}</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-2">
          <Nav.Link className="bg-success  "><Link className="text-dark" to="/counter">{t('Counter')}</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-auto"><Nav activeKey={theme.headTheme === info ? "1" : "2"} onSelect={changeThemeNow}>
          <NavDropdown title={t('Theme')} id="basic-nav-dropdown-Theme">
            <NavDropdown.Item eventKey="1">{t('light')}</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">{t('dark')}</NavDropdown.Item>
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
