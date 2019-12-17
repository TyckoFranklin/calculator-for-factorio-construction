import { fork } from "redux-saga/effects";
import * as sagas from './saga';


export default function* () {
    const forkedSagas = Object.keys(sagas).map(k => fork(sagas[k]));
    yield [...forkedSagas];
}