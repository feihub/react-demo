import React from 'react';
import './i18n'
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.isEnglish = true;
    }
  
   const { t, i18n } = useTranslation();

    change() {
      if(this.isEnglish){
          this.isEnglish=false;
         i18n.changeLanguage('en');
      }else{
         i18n.changeLanguage('zh');
      }
    }

  render() {
    return (
      <div className="App">
        <button onClick={this.change}>{t('Language')}<button/>
      </div>
    );
  }
}

export default App;
