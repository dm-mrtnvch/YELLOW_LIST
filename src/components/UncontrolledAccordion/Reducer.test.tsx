import {StateType, reducer, TOGGLE_COLLAPSED} from './Reducer'


test('reducer should change value to oposite one', () => {


    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
})

test('collapsed should be true', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
})

test('reducer should show error', () => {

    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: 'FAKE'})
    }).toThrowError()
})

