import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';

export function Home() {

const { t, i18n } = useTranslation();
    
const theme = useAppSelector(selectTheme);
const dispatch = useAppDispatch();

return (

<Container fluid>
    <Row>
        <Col sx={2}>
            <Left/>
        </Col>

        <Col sx={8}>
            <Center/>
        </Col>

        <Col sx={2}>
             <Right/>
        </Col>
    </Row>
</Container>
);
}
