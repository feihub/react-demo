import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';

//Using the withTranslation HOC

class LegacyComponentClass extends Component {
  render() {
    const { t } = this.props;

    return (
      <h1>{t('Welcome to React')}</h1>
    )
  }
}
const MyComponent = withTranslation()(LegacyComponentClass)

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App2() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
