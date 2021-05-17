import React, {useEffect, useState} from 'react';

type PropsType = {

}




export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const getTwoDigitsString = (num: number) => {
        return num < 10 ? '0' + num : num
    }

    return <div>
        <span>{getTwoDigitsString(date.getHours())}</span>
        :
        <span>{getTwoDigitsString(date.getMinutes())}</span>
        :
        <span>{getTwoDigitsString(date.getSeconds())}</span>
    </div>
}