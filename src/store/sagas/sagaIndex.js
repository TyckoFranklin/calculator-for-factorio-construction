import { fork } from "redux-saga/effects";
import * as sagas from './saga';
import * as createResourcesSaga from './createResources.saga';
import * as catagories from './catagories.saga';
import * as gameTypes from './gameTypes.saga';


export default function* () {
    // const forkedSagas = Object.keys(sagas).map(k => fork(sagas[k]));
    // yield [...forkedSagas];
    yield Object.keys(sagas).map(k => fork(sagas[k]));
    yield Object.keys(createResourcesSaga).map(k => fork(createResourcesSaga[k]));
    yield Object.keys(catagories).map(k => fork(catagories[k]));
    yield Object.keys(gameTypes).map(k => fork(gameTypes[k]));

}