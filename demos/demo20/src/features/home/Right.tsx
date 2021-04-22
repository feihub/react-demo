import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';

export function Right() {

const { t, i18n } = useTranslation();
    
const theme = useAppSelector(selectTheme);
const dispatch = useAppDispatch();

return (

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

);
}
