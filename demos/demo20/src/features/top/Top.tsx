import './i18n'
// the hook
import { useTranslation } from 'react-i18next';


function Top() {


 const theme = useAppSelector(selectTheme);
  const login = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();

  const changeTheme = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
    if (eventKey === '1') {
      dispatch(changeThemeLight());
    } else if (eventKey === '2') {
       dispatch(changeThemeInfo());
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
            <Nav.Item className="ms-auto"><Nav activeKey={theme === "light" ? "1" : "2"} onSelect={changeTheme}>
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
            <Nav.Item className="me-5">
              
              if(!login){
                
                <Nav.Link as button href="#/login">{t('Login')}</Nav.Link>
                
                }else {
                
                <Dropdown as={ButtonGroup}>
                   <Image src="holder.js/171x180" roundedCircle />
                  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                }
              
          </Nav.Item>
          </Nav>
      </Navbar >

);

}