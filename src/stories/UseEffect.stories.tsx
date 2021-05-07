import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffectDemo'
}


export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('set timeout example')

    // useEffect(() => {
    //     console.log('simple useEffect')
    //     document.title = counter.toString()
    // })
    //
    // useEffect(() => {
    //     console.log('useEffect render every time')
    //     document.title = counter.toString()
    // })
    //
    // useEffect(() => {
    //     console.log('useEffect render first time')
    //     document.title = counter.toString()
    // }, [])
    //
    // useEffect(() => {
    //     console.log('useEffect render every counter changes')
    //     document.title = counter.toString()
    // }, [counter])

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('use effect with counter')
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    useEffect(() => {
        setInterval(() => {
            console.log('tick: ' + counter)
            setCounter(state => state + 1)
        }, 1000)
    },[])





    return <>
        hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>

}