import './i18n'
// the hook
import { useTranslation } from 'react-i18next';


function NavLogin() {


   const { t, i18n } = useTranslation();
 
 const theme = useAppSelector(selectTheme);
 const login = useAppSelector(selectLogin);
 const dispatch = useAppDispatch();
   
     const logoutNow = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
        if(eventKey === '2'){
            dispatch(logout());
        }
  };

  return (


{if(!login){
                
                <Nav.Link as button href="#/login">{t('Login')}</Nav.Link>
                
                }else {
                
                <Dropdown as={ButtonGroup}>
                   <Image src="holder.js/171x180" roundedCircle />
                  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                  <Dropdown.Menu onSelect={logoutNow} >
                    <Dropdown.Item eventKey="1" href="#/show">User Info</Dropdown.Item>
                    <Dropdown.Item eventKey="2" >Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                }}

);


}
