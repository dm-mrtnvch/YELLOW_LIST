import React, {useState} from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff    ,
}

const callback = action('on off clicked')

export const OnMode = () => <UncontrolledOnOff on={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff on={true} onChange={callback}/>
export const BugMode = () => <div>unsync when change defaultValue when already rendered</div>
export const DefaultInputValue = () => <input defaultValue={'yo'}/>