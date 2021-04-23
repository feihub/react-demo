// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  logout,
  selectLogin,
} from '../login/loginSlice';
import { Dropdown, Image, ButtonGroup, Button } from 'react-bootstrap';
import { useHistory, NavLink } from "react-router-dom";

export function NavLogin() {

  const { t } = useTranslation();
  const login = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();

  let history = useHistory();

  const logoutNow = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
    dispatch(logout());
    history.push("/home");
  };

  const show = (eventKey: string | null, e: React.SyntheticEvent<unknown>): void => {
    history.push("/show");
  };


  if (!login) {
    return <NavLink to="/login"><Button className="bg-success">{t('Login')}</Button></NavLink>;
  } else {
    return < Dropdown as={ButtonGroup}>
      <Button><Image src="https://avatars.githubusercontent.com/u/24521545?s=20&v=4" fluid roundedCircle />  Test User</Button>
      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
      <Dropdown.Menu >
        <Dropdown.Item onSelect={show}>
          {t('User Info')}
        </Dropdown.Item>
        <Dropdown.Item onSelect={logoutNow} >{t('Logout')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown >;
  }

}
