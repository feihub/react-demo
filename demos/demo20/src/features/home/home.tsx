import { Alert } from 'react-bootstrap';
// the hook
import { useTranslation } from 'react-i18next';

export function Home() {

    const { t, i18n } = useTranslation();

    return <Alert>{t('Home')}</Alert>;
}