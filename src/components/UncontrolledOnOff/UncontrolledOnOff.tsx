import React, {useState} from 'react';

type OnOffType = {
    defaultOn?: boolean
    onChange: (value: boolean) => void
}


export function UncontrolledOnOff (props: OnOffType) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        height: "20px",
        width: "40px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        height: "20px",
        width: "40px",
        border: "1px solid black",
        display: "inline-block",
        margin: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        height: "12px",
        width: "12px",
        borderRadius: "8px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"
    }

    return <div>
        <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
        <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}
