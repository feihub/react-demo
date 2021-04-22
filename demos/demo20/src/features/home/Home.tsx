import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectTheme,
} from '../theme/themeSlice';
import { Container, Row, Col } from 'react-bootstrap';
import { Left } from './Left';
import { Center } from './Center';
import { Right } from './Right';

export function Home() {

    const { t, i18n } = useTranslation();

    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    return (

        <Container fluid>
            <Row>
                <Col xs={2}>
                    <Left />
                </Col>

                <Col xs={8}>
                    <Center />
                </Col>

                <Col xs={2}>
                    <Right />
                </Col>
            </Row>
        </Container>
    );
}
