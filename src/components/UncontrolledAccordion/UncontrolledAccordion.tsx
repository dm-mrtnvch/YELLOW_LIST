import React, {useReducer, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {log} from 'util';
import {reducer, TOGGLE_COLLAPSED} from './Reducer';

type AccordionType = {
    titleValue: string
    collapsed?: boolean
}


type ActionType = {
    type: string
}


// const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'
//
// const reducer = (state: boolean, action: ActionType) => {
//     // console.log('REDUCER START:')
//     // console.log(state)
//     // console.log(action)
//     // console.log('REDUCER END:')
//     switch (action.type) {
//         case TOGGLE_CONSTANT:
//             return !state
//         default:
//             throw new Error('Bad action type')
//     }
//     return state
// }


export function UncontrolledAccordion(props: AccordionType) {
    console.log('Uncontrolled Accordion rendering')

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})


    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})}}/>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    )
}


function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
