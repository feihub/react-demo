import './i18n'
// the hook
import { useTranslation } from 'react-i18next';
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';

const { Header, Content, Footer } = Layout;

function App() {

  const { t, i18n } = useTranslation();

  const menu = (
    <Menu onClick={(e) => handleMenuClick(e)}>
      <Menu.Item key="1">
        English
      </Menu.Item>
      <Menu.Item key="2">
        中文
      </Menu.Item>
    </Menu>
  );

  function handleMenuClick(e: MenuInfo) {
    if (e.key == '1') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('zh');
    }

  }

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">{t('nav1')}</Menu.Item>
            <Menu.Item key="2">{t('nav2')}</Menu.Item>
            <Menu.Item key="3">{t('nav3')}</Menu.Item>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  {t('Language')} <DownOutlined />
                </a>
            </Dropdown>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{t('Home')}</Breadcrumb.Item>
            <Breadcrumb.Item>{t('List')}</Breadcrumb.Item>
            <Breadcrumb.Item>{t('App')}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{t('Content')}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{t('Ant Design ©2018 Created by Ant UED')}</Footer>
      </Layout>
    </div>
  );
}

export default App;
