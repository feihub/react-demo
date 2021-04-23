import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
    selectTheme,
} from '../theme/themeSlice';
import { Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function Left() {

    const { t, i18n } = useTranslation();

    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    return (
        <Container fluid>
            <Nav className="flex-column mt-3">
                <NavLink className="text-secondary mt-3" to="/home/item1">{t('Concept')}</NavLink>
                <NavLink className="text-secondary mt-3" to="/home/item2">{t('Example')}</NavLink>
            </Nav>
        </Container>
    );
}
