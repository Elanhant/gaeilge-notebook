import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as constants from '../constants';
import * as api from '../services/api';
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

export interface LoadWords {
    type: constants.LOAD_WORDS
}

export interface FetchWords {
    type: constants.WORDS_REQUEST | constants.WORDS_SUCCESS | constants.WORDS_FAILURE;
    payload: object;
    error?: boolean
}

function* fetchWords(): IterableIterator<Effect> {
    yield put({ type: constants.WORDS_REQUEST } as FetchWords);

    const { response, error } = yield call(api.get, '/api/words');

    if (response) {
        yield put({
            type: constants.WORDS_SUCCESS,
            payload: response
        });
    } else {
        yield put({
            type: constants.WORDS_FAILURE,
            payload: error,
            error: true
        });
    }
}

export function* fetchWordsSaga(): IterableIterator<Effect> {
    yield takeEvery(constants.LOAD_WORDS, fetchWords);
}

export function* rootSaga(): IterableIterator<Effect> {
    yield all([
        fork(fetchWordsSaga)
    ]);
}
