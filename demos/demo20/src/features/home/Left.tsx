import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectTheme,
} from '../theme/themeSlice';
import { Nav, Row, Col } from 'react-bootstrap';

export function Left() {

    const { t, i18n } = useTranslation();

    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    return (

        <Nav defaultActiveKey="#/home/item" className="flex-column">
            <Nav.Link href="#/home/item">{t('Concept')}</Nav.Link>
            <Nav.Link href="#/home/item2">{t('Example')}</Nav.Link>
        </Nav>
    );
}
