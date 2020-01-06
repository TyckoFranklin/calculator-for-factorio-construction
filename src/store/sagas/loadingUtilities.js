import { put, takeEvery, select, call } from 'redux-saga/effects'
import * as actions from '../redux/actions';

export function* addLoading(id) {
    const loading = yield select(state=>state.loading);
    const payload = new Set(loading);
    payload.add(id);
    yield put({
        type:actions.SET_LOADING,
        payload,
    });
}

export function* removeLoading(id) {
    const loading = yield select(state=>state.loading);
    const payload = new Set(loading);
    payload.delete(id);
    yield put({
        type:actions.SET_LOADING,
        payload,
    });
}