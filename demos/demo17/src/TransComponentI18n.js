import React from 'react';
import { Trans, useTranslation } from 'react-i18next'

//Using the Trans component

export default function TransComponentI18n () {
  const { t } = useTranslation();
  return <Trans t={t} >Language</Trans>;
}