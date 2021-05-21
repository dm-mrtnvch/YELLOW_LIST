import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffectDemo'
}


export const ResetEffectExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('component rendered')



    useEffect(() => {
        console.log('effect ocured: ' + counter)
        return () => {
            console.log('reset effect: ' + counter)
        }
    },[counter])


    const increase = () => setCounter(counter + 1)


    return <>
        Hello, counter: {counter} <button onClick={increase}>++++</button>
    </>

}



export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('component rendered with' + text)



    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    },[text])

    return <>
        Typed text: {text}
    </>

}



export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('set timeout example')


    useEffect(() => {
        setInterval(() => {
            // console.log('tick: ' + counter)
            setCounter(state => state + 1)
        }, 1000)
    },[])





    return <>
        hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>

}




export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log('component rendered with' + text)



    useEffect(() => {

        const timeoutID = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText(' 3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutID)
        }
    },[text])

    return <>
        Typed text: {text}
    </>

}




export const SetIntervalExample = () => {
    const [text, setText] = useState('')

    console.log('component rendered with' + text)



    useEffect(() => {

        const intervalID = setInterval(() => {
            setText(' 3 seconds passed')
        }, 3000)

        return () => {
            clearInterval(intervalID)
        }
    },[text])

    return <>
        Typed text: {text}
    </>

}










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