import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

export interface ChangeRoute {
    type: constants.CHANGE_ROUTE;
    payload: {
        pathname: string;
        search?: string;
    };
}

export type RouterAction = ChangeRoute;

export function changeRoute(pathname: string, search?: string): ChangeRoute {
    return {
        type: constants.CHANGE_ROUTE,
        payload: {
            pathname,
            search: search || ''
        }
    };
}
