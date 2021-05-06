import './i18n'
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

//Using the useTranslation hook

function App() {

  const { t, i18n } = useTranslation();

  const change = () => {
    if (i18n.language==='zh') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('zh');
    }
  }

  return (
    <div className="App">
      <button onClick={change}>{t('Language')}</button>
    </div>
  );
}

export default App;
