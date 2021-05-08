import React from 'react';
import Child from './Child';

import { useSelector, useDispatch } from 'react-redux';
import {
    changTestValue,
    changTestValue2,
    changTestValue3,
    selectTestValue,
    selectTestValue2,
    selectTestValue3,
} from './testSlice';


function Parent() {

    const testValue = useSelector(selectTestValue);
    const testValue2 = useSelector(selectTestValue2);
    const testValue3 = useSelector(selectTestValue3);

    const dispatch = useDispatch();

    return (
        <div className='bg-light p-5'>
            <h1>This is Parent</h1>
            <div>testValue3：<input value={testValue3.testValue3} onChange={(e)=>{dispatch(changTestValue3(e))}} /></div>

            {(testValue3.testValue3==='Child') &&
                <Child />
            }
        </div>
    );
}

export default Parent;