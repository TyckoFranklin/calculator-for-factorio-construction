import { put, takeEvery, select, call } from 'redux-saga/effects'
import * as actions from '../redux/actions';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import {addLoading,removeLoading} from './loadingUtilities';

function* fetchAllIngredients(action) {
    const loadingId = {};
    yield call(addLoading, loadingId);
    try {
        /* get list of all Ingredients and list of all types */
        const result = yield API.graphql(graphqlOperation(queries.listIngredients,{limit:1000}));
        console.log({result})
        const currentIngredients = yield select(state=>state.ingredients);
        const payload = new Map(currentIngredients);
        for(const value of result.data.listIngredients.items){
            payload.set(value.id, value);
        }
        yield put({
            type:actions.SET_INGREDIENTS,
            payload,
        })
    }
    catch (e) {
        console.error(e);    }

    yield call(removeLoading, loadingId);
}

export function* watchFetchAllIngredients() {
    yield takeEvery(actions.FETCH_INGREDIENTS, fetchAllIngredients);
}

