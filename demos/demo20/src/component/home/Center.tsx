import { Alert, Container } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
    selectTheme,
} from '../theme/themeSlice';

export function Center() {

    const { t, i18n } = useTranslation();

    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    return (

        <Container fluid>
            <main>

                <Alert id='item11' variant='primary' className='mt-3'>

                    <h1>{t('Component')}</h1>

                    <p>
                        {t('Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.')}
                    </p>

                </Alert>

                <Alert id='item12' variant='secondary'>

                    <h1>{t('Lifecycle')}</h1>

                    <p>
                        {t('This page introduces the concept of lifecycle in a React component.')}
                    </p>

                    <Alert id='item13' variant='success'>

                        <h2>{t('Props & State')} </h2>

                        <p>
                            {t('This page introduces the concept of Props & State in a React component.')}
                        </p>

                    </Alert>

                </Alert>

                <Alert id='item21' variant='info'>

                    <h1>{t('Example 1')} </h1>

                    <p>
                        {t('This is Example 1.')}
                    </p>

                </Alert>

            </main>
        </Container>
    );
}
