import { EnthusiasmAction } from '../actions';
import { EnthusiasmState, RouterState } from '../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';

export const enthusiasmInitState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
} as EnthusiasmState;

export function enthusiasm(state: EnthusiasmState = enthusiasmInitState, action: EnthusiasmAction): EnthusiasmState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            return state;
    }
}

export const routerInitState = {
    currentPath: '/'
} as RouterState;

export function router(state: RouterState = routerInitState, action: EnthusiasmAction): RouterState {
    return state;
}
