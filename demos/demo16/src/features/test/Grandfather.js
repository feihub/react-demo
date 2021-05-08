import React from 'react';
import Parent from './Parent';

import { useSelector, useDispatch } from 'react-redux';
import {
  changTestValue,
  changTestValue2,
  changTestValue3,
  asyncChangTestValue4,
  selectTestValue,
  selectTestValue2,
  selectTestValue3,
  selectTestValue4,
  customerChangTestValue4,
} from './testSlice';

function Grandfather() {

  const testValue = useSelector(selectTestValue);
  const testValue2 = useSelector(selectTestValue2);
  const testValue3 = useSelector(selectTestValue3);
  const testValue4 = useSelector(selectTestValue4);

  const dispatch = useDispatch();

  return (
    <div className='bg-info p-5'>
      <h1>This is Grandfather</h1>

      <div>this is testValue4: <button onClick={(e)=>{dispatch(asyncChangTestValue4(e))}} >{testValue4}</button>
      <button onClick={(e)=>{dispatch(customerChangTestValue4(e))}} >customerChangTestValue4</button></div><br/><br/>

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
