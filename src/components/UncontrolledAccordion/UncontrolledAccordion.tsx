import React, {useState} from 'react';

type AccordionType = {
    titleValue: string
    collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionType) {
    console.log('Accordion rendering')

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => {
                setCollapsed(!collapsed)
            }}>TOGGLE
            </button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle rendering')
    return (
        <h3>{props.title}</h3>
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

export default UncontrolledAccordion;