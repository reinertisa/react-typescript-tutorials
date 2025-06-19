type CountStateType = number

type CountUpdateType = {
    type: 'increment' | 'decrement'
    value: number
}

type CountResetType = {
    type: 'reset'
}

export type CountActionType = CountUpdateType | CountResetType;

export const initialState = 0;

export function countReducer(state: CountStateType, action: CountActionType) {
    switch(action.type) {
        case 'increment':
            return state + action.value;
        case 'decrement':
            return state - action.value;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}