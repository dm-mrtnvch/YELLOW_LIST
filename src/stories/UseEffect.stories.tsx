import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}


export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('simple example')

    useEffect(() => {
        console.log('simple useEffect')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect render every time')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect render first time')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect render every counter changes')
        document.title = counter.toString()
    }, [counter])

    return <>
        hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>

}