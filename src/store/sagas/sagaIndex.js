import { fork } from "redux-saga/effects";
import * as sagas from './saga';
import * as createResourcesSaga from './createResources.saga';
import * as catagories from './catagories.saga';
import * as gameTypes from './gameTypes.saga';
import * as entities from './entities.saga';
import * as ingredients from './ingredients.saga';
import * as recipes from './recipes.saga';


export default function* () {
    // const forkedSagas = Object.keys(sagas).map(k => fork(sagas[k]));
    // yield [...forkedSagas];
    yield Object.keys(sagas).map(k => fork(sagas[k]));
    yield Object.keys(createResourcesSaga).map(k => fork(createResourcesSaga[k]));
    yield Object.keys(catagories).map(k => fork(catagories[k]));
    yield Object.keys(gameTypes).map(k => fork(gameTypes[k]));
    yield Object.keys(entities).map(k => fork(entities[k]));
    yield Object.keys(recipes).map(k => fork(recipes[k]));
    yield Object.keys(ingredients).map(k => fork(ingredients[k]));

}