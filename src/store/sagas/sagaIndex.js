import { fork } from "redux-saga/effects";
import * as sagas from './saga';
import * as createResourcesSaga from './createResources.saga';


export default function* () {
    // const forkedSagas = Object.keys(sagas).map(k => fork(sagas[k]));
    // yield [...forkedSagas];
    yield Object.keys(sagas).map(k => fork(sagas[k]));
    yield Object.keys(createResourcesSaga).map(k => fork(createResourcesSaga[k]));
}