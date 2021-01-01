import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Accordion, {OnOff} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion    ,
}

const callback = action('Accordion mode change event')

export const CollapsedMode = () => <Accordion titleValue={'menu'} onChange={callback} collapsed={true}/>
export const UncollapsedMode = () => <Accordion titleValue={'users'} onChange={callback} collapsed={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'users'} onChange={() => setValue(!value)}/>
}