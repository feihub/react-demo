import React from 'react';
import './App.css';
import './i18n'
// the hook
import { useTranslation } from 'react-i18next';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">{t('nav1')}</Menu.Item>
            <Menu.Item key="2">{t('nav2')}</Menu.Item>
            <Menu.Item key="3">{t('nav3')}</Menu.Item>
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
