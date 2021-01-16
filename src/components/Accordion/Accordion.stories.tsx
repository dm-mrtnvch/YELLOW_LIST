import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionType} from './Accordion';
import {Story} from '@storybook/react';


export default {
    title: 'Accordion',
    components: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some items was clicked')

export const MenuCollapsed = () => <Accordion titleValue={'Menu'}
                                              collapsed={true}
                                              onChange={callback}
                                              items={[]}
                                              onClick={onClickCallback}/>

export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'}
                                                     collapsed={false}
                                                     onChange={callback}
                                                     items={[
                                                        {title: 'Dimych', value: 1},
                                                        {title: 'Valera', value: 2},
                                                        {title: 'Artem', value: 3},
                                                        {title: 'Viktor', value: 4}
                                                    ]}
                                                     onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: 'Dimych', value: 1},
                          {title: 'Valera', value: 2},
                          {title: 'Artem', value: 3},
                          {title: 'Viktor', value: 4}
                      ]}
                      onClick={(value) => {alert(`user with ID ${value} should be happy`)}}/>
}









//
// const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
//     table: {
//         category: categoryName
//     }
// })
//
// export default {
//     title: 'components/Accordion',
//     component: Accordion,
//     argTypes: {
//         color: {
//             control: 'color',
//             ...GetCategoryObj('Color')
//         },
//         onChange: {
//             ...GetCategoryObj('Event')
//         },
//         onClick: {
//             ...GetCategoryObj('Event')
//         },
//         item: {...GetCategoryObj('Main')},
//         collapsed: {...GetCategoryObj('Main')},
//         titleValue: {...GetCategoryObj('Main')}
//     }
// }
//
//
// const callback = action('accordion mode change event fired')
// const onClickCallback = action('some item was clicked')
//
// const Template: Story<AccordionType> = (args) => <Accordion {...args}/>
// const callbacksProps = {
//     onChange: callback,
//     onClick: onClickCallback
// }
//
// export const MenuCollapsedMode = Template.bind({})
// MenuCollapsedMode.args = {
//     titleValue: 'Menu',
//     collapsed: true,
//     ...callbacksProps,
//     items: [],
//
// }
//
// export const UsersCollapsedMode = Template.bind({})
// UsersCollapsedMode.args = {
//     titleValue: 'Menu',
//     collapsed: true,
//     ...callbacksProps,
//     items: [{title: 'Dimych', value: 1},
//         {title: 'Valera', value: 2},
//         {title: 'Artem', value: 3},
//         {title: 'Viktor', value: 4}],
//
// }
//
// export const ModeChanging: Story<AccordionType> = (args) => {
//     const [value, setValue] = useState<boolean>(true)
//
//     return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
// }
//
// ModeChanging.args = {
//     titleValue: 'Users',
//     items: [
//         {title: 'Dimych', value: 1},
//         {title: 'Valera', value: 2},
//         {title: 'Artem', value: 3},
//         {title: 'Viktor', value: 4}
//
//     ],
//     onClick: (value) => {
//         alert(`user with ID ${value} should be happy`)
//     }
// }