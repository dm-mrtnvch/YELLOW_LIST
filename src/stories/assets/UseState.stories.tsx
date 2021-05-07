import React, {useMemo, useState} from 'react';
import {log} from 'util';

export default {
    title: 'useState demo'
}


function generateData() {
    console.log('generate data ')
    return 2348724
}

export const Example1 = () => {
    console.log('example1')

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData) // [1, function(){}]

    const changer = (state: number) => {
        return state + 1
    }


    return  (
        <>
            <button onClick={() => {setCounter(changer)}}>++</button>
            {counter}
        </>
    )
}


