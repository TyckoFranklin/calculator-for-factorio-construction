import { put, takeEvery, select, call } from 'redux-saga/effects'
import * as actions from '../redux/actions';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import {addLoading,removeLoading} from './loadingUtilities';

function* createCategoriesAndTypes(action) {
    const loadingId = {};
    yield call(addLoading, loadingId);
    const example = {
        "id": "accumulator",
        "name": "Accumulator",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Accumulator",
        "category": "Production",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "battery",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 2
                }
            ]
        }
    }
    try {
        /* get list of all categories and list of all types */
        const entities = yield select(state=>state.entities);
        const categories = new Set();
        const types = new Set();
        for(const [key,value] of entities){
            categories.add(value.category);
            types.add(value.type);
        }
        console.log({categories, types});
        for(const gameId of categories){
            const result = yield API.graphql(graphqlOperation(mutations.createCategory,{input:{gameId}}));
            console.log(result)
        }
        for(const gameId of types){
            const result = yield API.graphql(graphqlOperation(mutations.createGameItemType,{input:{gameId}}));
            console.log(result)
        }
    }
    catch (e) {
        console.error(e);
    }

    yield call(removeLoading, loadingId);
}

export function* watchCreateCategoriesAndTypes() {
    yield takeEvery(actions.SEND_CATEGORIES_TYPES, createCategoriesAndTypes);
}