import React from 'react';
import { Trans } from 'react-i18next';

//Using the Trans component

export default function TransComponentI18n () {
  return <Trans>Welcome to <strong>React</strong></Trans>
}

// the translation in this case should be
"Welcome to <1>React</1>": "Welcome to <1>React and react-i18next</1>"
