import './i18n'
// the hook
import { useTranslation } from 'react-i18next';


function TopLogin() {


   const { t, i18n } = useTranslation();
 
 const theme = useAppSelector(selectTheme);
 const login = useAppSelector(selectLogin);
 const dispatch = useAppDispatch();

  return (


{if(!login){
                
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
                
                }}

);


}
