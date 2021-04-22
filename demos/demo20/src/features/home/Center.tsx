import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';

export function Center() {

const { t, i18n } = useTranslation();
    
const theme = useAppSelector(selectTheme);
const dispatch = useAppDispatch();

return (

<main>

            <Alert id='item_1'>this is item_1 </Alert>

            <Alert id='item_2'>
                
                this is item_2 

                <Alert id='item_2_1'>this is item_2_1 </Alert>

            </Alert>

            <Alert id='item2_1'>this is item2_1 </Alert>

        </main>
);
}
