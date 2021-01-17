import React from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select'

export default  {
    title: 'Select',
    component: Select
}

export const BaseExample = () =>
    <>
        <Select onChange={action('Value changed')}
                value={'1'}
                items={[
                    {value: 1, title: 'Minsk'},
                    {value: 2, title: 'Moscow'},
                    {value: 3, title: 'Kiev'}
                ]}
        />
    </>


export const WithoutValue = () =>
    <>
        <Select onChange={action('Value changed')}
                value={'1'}
                items={[
                    {value: 1, title: 'Minsk'},
                    {value: 2, title: 'Moscow'},
                    {value: 3, title: 'Kiev'}
                ]}
        />
    </>