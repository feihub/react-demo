import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
    selectTheme,
} from '../theme/themeSlice';
import { Nav, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export function Left() {

    const { t, i18n } = useTranslation();

    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    return (
        <Nav defaultActiveKey="/home/item" className="flex-column">
            <NavLink to="/home/item">{t('Concept')}</NavLink>
            <NavLink to="/home/item2">{t('Example')}</NavLink>
        </Nav>
    );
}
