import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';

export function Home() {

const { t, i18n } = useTranslation();

return (

<Container fluid>
    <Row>
        <Col sx={2}>
            <Nav defaultActiveKey="#/home/item" className="flex-column">
                <Nav.Link href="#/home/item">Active</Nav.Link>
                <Nav.Link href="#/home/item2">Link</Nav.Link>
            </Nav>
        </Col>

        <Col sx={8}>
        <main>

            <Alert id='item_1'>this is item_1 </Alert>

            <Alert id='item_2'>
                
                this is item_2 

                <Alert id='item_2_1'>this is item_2_1 </Alert>

            </Alert>

            <Alert id='item2_1'>this is item2_1 </Alert>

        </main>
        </Col>

        <Col sx={2}>
            <Switch>
                <Route exact path="/home/item">
                    <ListGroup as="ul" defaultActiveKey="#item_1">
                        <ListGroup.Item as="li"><Nav.Link href="#item_1">Cras justo odio</Nav.Link></ListGroup.Item>
                        <ListGroup.Item as="li">
                            <Nav.Link href="#item_2">Morbi leo risus</Nav.Link>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li"><Nav.Link href="#item_2_1">Cras justo odio</Nav.Link></ListGroup.Item>
                              </ListGroup>
                            </ListGroup.Item>
                      </ListGroup>
                </Route>
                <Route path="/home/item2">
                    <ListGroup as="ul" defaultActiveKey="#item2_1">
                        <ListGroup.Item as="li"><Nav.Link href="#item2_1">Cras justo odio</Nav.Link></ListGroup.Item>
                </Route>
              </Switch>
        </Col>
    </Row>
</Container>
);
}
