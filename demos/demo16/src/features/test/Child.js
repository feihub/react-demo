import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  changTestValue,
  changTestValue2,
  changTestValue3,
  selectTestValue,
  selectTestValue2,
  selectTestValue3,
} from './testSlice';

function Child() {

  const testValue = useSelector(selectTestValue);
  const testValue2 = useSelector(selectTestValue2);
  const testValue3 = useSelector(selectTestValue3);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is Child</h1>
      <div>testValue：<input value={testValue} onChange={(e)=>{dispatch(changTestValue(e))}} /></div>
    </div>
  );
}

export default Child;