import {useReducer} from 'react';

type CounterStateType = {
    firstCounter: number
    secondCounter: number
}

type CounterUpdateType = {
    type: 'increment' | 'decrement' | 'increment2' | 'decrement2'
    value: number
}

type CounterResetType = {
    type: 'reset'
}

type CounterActionType = CounterUpdateType | CounterResetType;

const initialState: CounterStateType = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (state: CounterStateType, action: CounterActionType) => {
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function Counter6() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>First counter: {state.firstCounter}</h2>
            <h2>Second counter: {state.secondCounter}</h2>
            <div>
                <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
                <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment counter 2</button>
                <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement counter 2</button>
            </div>
            <button onClick={() => dispatch({type: 'reset'})}></button>
        </div>
    )
}