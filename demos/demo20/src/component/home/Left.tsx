import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
    selectTheme,
} from '../theme/themeSlice';
import { Nav, Container, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Center } from './Center';
import "./Home.css";

export function Left() {

    const { t, i18n } = useTranslation();

    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    return (

        <Container fluid>
            <Card className="home-align-items border-0 home-left">
                <Nav className="border-radius-home flex-column " >
                    <Nav.Link className="text-secondary m-2" href="/home/item1#item11">{t('Concept')}</Nav.Link>
                    <Nav.Link className="text-secondary m-2" href="/home/item2#item21">{t('Example')}</Nav.Link>
                </Nav>
            </Card>
        </Container>

    );
}