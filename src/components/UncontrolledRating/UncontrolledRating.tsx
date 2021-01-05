import React, {useState} from 'react';

type RatingType = {
    value?: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingType) {

    let [value, setValue] = useState(4)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue}/>
            <Star selected={value > 1} setValue={setValue}/>
            <Star selected={value > 2} setValue={setValue}/>
            <Star selected={value > 3} setValue={setValue}/>
            <Star selected={value > 4} setValue={setValue}/>
        </div>
    )
}

type StarType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarType) {
    return <span onClick={() => {
        props.setValue(3)}}>{props.selected ? <b>star </b>: 'span ' }</span>
}

