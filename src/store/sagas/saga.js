import { put, takeEvery, select, call } from 'redux-saga/effects'
import * as actions from '../redux/actions';
// import { API, graphqlOperation, Auth, Storage } from 'aws-amplify';
// import * as mutations from '../../graphql/mutations'
// import * as queries from '../../graphql/queries'
import { fetchRecipes } from 'network/fetchRecipes';
import uuid from 'uuid';

function* getRecipes(action) {

    try {
        const results = yield call(fetchRecipes);

        // console.log(results);
        // const entities = yield select( state => state.recipes);

        // const example = {
        //     "id": "accumulator",
        //     "name": "Accumulator",
        //     "type": "Machinery",
        //     "wiki_link": "https://wiki.factorio.com/Accumulator",
        //     "category": "Production",
        //     "recipe": {
        //         "time": 10,
        //         "yield": 1,
        //         "ingredients": [
        //             {
        //                 "id": "battery",
        //                 "amount": 5
        //             },
        //             {
        //                 "id": "iron-plate",
        //                 "amount": 2
        //             }
        //         ]
        //     }
        // }

        const entities = new Map();

        results.forEach(element => {
            entities.set(element.id, element);
        });

        yield put({ type: actions.SET_ENTITIES, payload:entities });


        const recipes = new Map();
        results.forEach(element => {
            recipes.set(element.id, element.recipe);
        });

        yield put({ type: actions.SET_RECIPES, payload:recipes });
    }
    catch (e) {
        console.error(e);
    }


    /*

    We call the api to get the data want
    We get the current redux state for that data,
    We Format the network data.
    We combine the network data with our local data
    We store the combined the data in redux

    */




}

export function* watchGetRecipes() {
    yield takeEvery(actions.FETCH_RECIPES, getRecipes);
}