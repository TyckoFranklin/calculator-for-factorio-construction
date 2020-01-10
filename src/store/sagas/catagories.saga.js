import { put, takeEvery, select, call } from 'redux-saga/effects'
import * as actions from '../redux/actions';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import {addLoading,removeLoading} from './loadingUtilities';

const listCategorys = `query ListCategorys(
    $filter: ModelcategoryFilterInput
    $limit: Int
    $nextToken: String
) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            gameId
            entities {
                items {
                    id
                }
            }
        }
    }
}`;

function* fetchAllCategories(action) {
    const loadingId = {};
    yield call(addLoading, loadingId);
    try {
        /* get list of all categories and list of all types */
        const result = yield API.graphql(graphqlOperation(listCategorys,{limit:1000}));
        console.log({result})
        const currentCategories = yield select(state=>state.categories);
        const payload = new Map(currentCategories);
        for(const value of result.data.listCategorys.items){
            payload.set(value.id, value);
        }
        yield put({
            type:actions.SET_CATEGORIES,
            payload,
        })
    }
    catch (e) {
        console.error(e);
    }

    yield call(removeLoading, loadingId);
}

export function* watchFetchAllCategories() {
    yield takeEvery(actions.FETCH_CATEGORIES, fetchAllCategories);
}

