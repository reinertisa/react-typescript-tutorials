import {useReducer} from 'react';

type CounterState = {
    count: number
}
type UpdateAction = {
    type: 'increment' | 'decrement' | 'reset'
    payload: number
}
type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction;

const initialState = {
    count: 0
}

function reducer(state: CounterState, action: CounterAction): CounterState {
    switch(action.type) {
        case 'increment':
            return {count: state.count + action.payload};
        case 'decrement':
            return {count: state.count - action.payload};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function Counter2() {
    const[state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = (): void => dispatch({type: 'increment', payload: 10});
    const handleDecrement = (): void => dispatch({type: 'decrement', payload: 5});
    const handleReset = (): void => dispatch({type: 'reset'});

    return (
        <div>
            Count: {state.count}
            <button onClick={handleIncrement}>Increment 10</button>
            <button onClick={handleDecrement}>Decrement 5</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}