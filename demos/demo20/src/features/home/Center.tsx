import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';

export function Center() {

const { t, i18n } = useTranslation();
    
const theme = useAppSelector(selectTheme);
const dispatch = useAppDispatch();

return (

<main>

            <Alert id='item_1'>
                
                <h1>{t('Component')}</h1>
                
                <p>
                    {t('Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.')}
                </p>
                
            </Alert>

            <Alert id='item_2'>
                
                <h1>{t('Lifecycle')}</h1>

                <p>
                    {t('This page introduces the concept of lifecycle in a React component.')}
                </p>
                
                <Alert id='item_2_1'>
                    
                    <h2>{t('Props & State')} </h2>
                    
                        <p>
                            {t('This page introduces the concept of Props & State in a React component.')}
                        </p>
                
                </Alert>

            </Alert>

            <Alert id='item2_1'>
                
                <h1>{t('Example1')} </h1>
                
                        <p>
                            {t('This is Example1.')}
                        </p>
                
            </Alert>

        </main>
);
}
