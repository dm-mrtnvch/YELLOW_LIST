import React from 'react';

export type ItemType = {
    title: string
    value: any
}

export type AccordionType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements what show not collapsed Accordion
     */
    items: ItemType[]
    /**
     * callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * optional Header's color
     */
    color?: string
 }

export function Accordion(props:AccordionType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                color={props.color}
                onChange={props.onChange}/>
                {!props.collapsed && <AccordionBody items={props.items}
                                                    // onClick={props.onClick}
                />}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle rendering')
    return (
        <h3
            style={{color: props.color ? props.color : 'black'}}
            onClick={(e) => props.onChange()}>{props.title}
        </h3>
    )
}

type AccordionBody = {
    items: Array<ItemType>
    // onClick: (value: any) => void
}

function AccordionBody(props: AccordionBody) {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
                {/*{props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i}</li>)}*/}
            </ul>
}
