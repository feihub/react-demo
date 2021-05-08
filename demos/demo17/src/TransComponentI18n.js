import React from 'react';
import { Trans, useTranslation } from 'react-i18next'

//Using the Trans component

export default function TransComponentI18n() {
  const { t } = useTranslation();
  //return <Trans t={t} >Language</Trans>;
  const count = 888;
  const name = "Panda";

  return <Trans i18nKey="userMessagesUnread" count={count} name={name} t={t}>
            Hello <strong title={t('Language')}>{{ name }}</strong>, you have {{ count }} unread message.<small>测试</small>
          </Trans>;
}