import './App.css'
import './i18n'
// the hook
import { useTranslation } from 'react-i18next';
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Counter } from './features/counter/Counter';
import { Home } from './features/home/home';

const { Header, Content, Footer } = Layout;

function App() {

  const { t, i18n } = useTranslation();

  const menu2 = (
    <Menu onClick={(e) => handleMenuClick2(e)}>
      <Menu.Item key="1">
        English
      </Menu.Item>
      <Menu.Item key="2">
        中文
      </Menu.Item>
    </Menu>
  );

  function handleMenuClick2(e: MenuInfo) {
    if (e.key === '1') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('zh');
    }

  }

  return (
    <div className="App">
      <Router>
        <Layout className="layout">
          <Header>
            <div className='logo' />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/clock">clock</Link></Menu.Item>
              <Menu.Item key="3">
                <Dropdown overlay={menu2}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {t('Language')} <DownOutlined />
                  </a>
                </Dropdown>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{t('Home')}</Breadcrumb.Item>
              <Breadcrumb.Item>{t('List')}</Breadcrumb.Item>
              <Breadcrumb.Item>{t('App')}</Breadcrumb.Item>
            </Breadcrumb>
          </Content>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/clock">
              <Counter />
            </Route>
          </Switch>
          <Footer style={{ textAlign: 'center' }}>{t('Ant Design ©2018 Created by Ant UED')}</Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
