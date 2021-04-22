import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import { useTranslation } from 'react-i18next';
import {
  selectTheme,
} from '../theme/themeSlice';

export function Counter() {
  //7.useAppSelector从store读取数据
  const count = useAppSelector(selectCount);
  //8.useAppDispatch触发动作
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  const { t, i18n } = useTranslation();

  const theme = useAppSelector(selectTheme);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          {t('Add Amount')}
        </button>
        <button
          className={styles.asyncButton}
          //B.3 用dispatch调用redux thunk
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          {t('Add Async')}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          {t('Add If Odd')}
        </button>
      </div>
    </div>
  );
}
