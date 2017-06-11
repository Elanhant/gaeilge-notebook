import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as constants from '../constants';
import { Effect } from 'redux-saga';

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

export interface FetchWords {
    type: constants.WORDS_REQUEST | constants.WORDS_SUCCESS | constants.WORDS_FAILURE;
    payload: object;
}

function* fetchWords(): IterableIterator<Effect> {
    console.log(10);
    const data = yield call(fetch, '/words');

    console.log(data);

    yield put({
        type: constants.WORDS_REQUEST,
        payload: {}
    } as FetchWords);
}

export function* fetchWordsSaga(): IterableIterator<Effect> {
    while (true) {
        yield takeEvery(constants.WORDS_REQUEST, fetchWords);
    }
}

export function* rootSaga(): IterableIterator<Effect> {
    yield all([
        fork(fetchWordsSaga)
    ]);
}