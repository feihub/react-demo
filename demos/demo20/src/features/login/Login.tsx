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
      
            <LoginFrom/>
      
      }else {
      
            <ShowFrom/>
      }
);

}
