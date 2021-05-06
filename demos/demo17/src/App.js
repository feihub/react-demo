import './i18n'
import './App.css';
import HOCI18n from './HOCI18n';
import TransComponentI18n from './TransComponentI18n';
import HookI18n from './HookI18n';

function App() {
  return (
    <div className="App">
      <HookI18n/>
      <HOCI18n/>
      <TransComponentI18n/>
    </div>
  );
}

export default App;
