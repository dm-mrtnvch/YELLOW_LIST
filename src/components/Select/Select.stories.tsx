import React, {useState} from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Select',
    component: Select
}

export const BaseExample = () => {
    const [value, setValue] = useState('2')

    return (
        <div>
            <Select value={'2'}
                    items={[
                        {value: '1', title: 'Minsk'},
                        {value: '2', title: 'Moscow'},
                        {value: '3', title: 'Kiev'},
                    ]}
                    onChange={action('value changed')}/>
        </div>
    )
}


export const WithValue = () => {

    const [value, setValue] = useState('2')

    return (
        <div>
            <Select value={value}
                    onChange={setValue}
                    items={
                        [
                            {value: '1', title: 'Minsk'},
                            {value: '2', title: 'Moscow'},
                            {value: '3', title: 'Kiev'},
                        ]
                    }
            />
        </div>
    )
}


export const WithoutValue = () => {

    const [value, setValue] = useState(null)

    return (
        <div>
            <Select value={value}
                    onChange={setValue}
                    items={
                        [
                            {value: '1', title: 'Minsk'},
                            {value: '2', title: 'Moscow'},
                            {value: '3', title: 'Kiev'},
                        ]
                    }
            />
        </div>
    )
}