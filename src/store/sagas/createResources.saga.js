import { put, takeEvery, select, call } from 'redux-saga/effects'
import * as actions from '../redux/actions';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import {addLoading,removeLoading} from './loadingUtilities';
import { fetchAllCategories } from './catagories.saga';
import { fetchAllGameTypes } from './gameTypes.saga';

function* createCategoriesAndTypes(action) {
    return;
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


function* createEntityRecipeIngredient(action) {
    const loadingId = {};
    yield call(addLoading, loadingId);

    try {
        /* get list of all categories and list of all types */
        yield call(fetchAllGameTypes);
        const gameTypes = yield select(state=>state.gameTypes);
        yield call(fetchAllCategories);
        const categories = yield select(state=>state.categories);

        console.log(gameTypes, categories);
        /* create lookup maps for gameIds */
        const gameTypesLookup = new Map();
        const categoriesLookup = new Map();

        for(const [key,value] of gameTypes){
            gameTypesLookup.set(value.gameId, key);
        }

        for(const [key,value] of categories){
            categoriesLookup.set(value.gameId, key);
        }

        console.log({gameTypes, gameTypesLookup, categories, categoriesLookup});

        /* Bring in local JSON data (in a Map) to start working on */
        const entities = yield select(state=>state.entities);

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
        /* Pseudo code */
        /* whole process needs logging and ways to figure out what elements had issues. Logging needs to reveal how to fix any loose ends, or orphaned resources. */
        /*  #1 Loop through JSON entity objects  */
        /*  #2 Nested Loop through recipes (This might just be an object and not an array with the data we have been given) */
        /*  #3 Nested Nested Loop through ingredients  */
        /*  #4 Inside #3 send create statements to graphql for each ingredient element and save the resulting dynamoDB id.  */
        /*  #5 Inside #2, and after #4, send create statement to graphql for recipe(s) and include ids for ingredients, save recipe DynamoDB id(s). */
        /*  #6 Send create statement to graphql for entity and include the id(s) for recipe(s) */
        /*  #7 ....  */
        /*  #8 profit  */

        // const categories = new Set();
        // const types = new Set();
        // for(const [key,value] of entities){
        //     categories.add(value.category);
        //     types.add(value.type);
        // }
        // console.log({categories, types});
        // for(const gameId of categories){
        //     const result = yield API.graphql(graphqlOperation(mutations.createCategory,{input:{gameId}}));
        //     console.log(result)
        // }
        // for(const gameId of types){
        //     const result = yield API.graphql(graphqlOperation(mutations.createGameItemType,{input:{gameId}}));
        //     console.log(result)
        // }
    }
    catch (e) {
        console.error(e);
    }

    yield call(removeLoading, loadingId);
}

export function* watchCreateEntityRecipeIngredient() {
    yield takeEvery(actions.CREATE_ENTITIES, createEntityRecipeIngredient);
}

