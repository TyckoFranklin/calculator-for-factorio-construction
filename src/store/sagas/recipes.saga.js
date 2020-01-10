import { put, takeEvery, select, call } from 'redux-saga/effects'
import * as actions from '../redux/actions';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import {addLoading,removeLoading} from './loadingUtilities';

const listRecipes = `query ListRecipes(
    $filter: ModelrecipeFilterInput
    $limit: Int
    $nextToken: String
) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            time
            yield
            ingredients {
                items {
                    id
                }
            }
            entity {
                id
            }
        }
    }
}
`;

function* fetchAllRecipes(action) {
    const loadingId = {};
    yield call(addLoading, loadingId);
    try {
        /* get list of all Recipes and list of all types */
        const result = yield API.graphql(graphqlOperation(listRecipes,{limit:1000}));
        console.log({result})
        const currentRecipes = yield select(state=>state.recipes);
        const payload = new Map(currentRecipes);
        for(const value of result.data.listRecipes.items){
            payload.set(value.id, value);
        }
        yield put({
            type:actions.SET_RECIPES,
            payload,
        })
    }
    catch (e) {
        console.error(e);    }

    yield call(removeLoading, loadingId);
}

export function* watchFetchAllRecipes() {
    yield takeEvery(actions.FETCH_RECIPES, fetchAllRecipes);
}

