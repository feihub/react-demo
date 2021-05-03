import React from 'react';
import Parent from './Parent';

import { useSelector, useDispatch } from 'react-redux';
import {
  changTestValue,
  changTestValue2,
  changTestValue3,
  selectTestValue,
  selectTestValue2,
  selectTestValue3,
} from './testSlice';

function Grandfather() {

  const testValue = useSelector(selectTestValue);
  const testValue2 = useSelector(selectTestValue2);
  const testValue3 = useSelector(selectTestValue3);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is Grandfather</h1>

      {
        (testValue === '0') &&
        <div>this is testValue : {testValue}<br/><br/></div>
      }



      <div>testValue2：<input value={testValue2} onChange={(e)=>{dispatch(changTestValue2(e))}} /></div>

      {
        (testValue2 === 'Parent') &&
        <Parent />
      }

    </div>
  );
}

export default Grandfather;
