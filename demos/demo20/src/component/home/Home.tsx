import { Container, Row, Col } from 'react-bootstrap';
import { Left } from './Left';
import { Center } from './Center';
import { Right } from './Right';

export function Home() {

    return (

        <Container className='pt-3' fluid>
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
