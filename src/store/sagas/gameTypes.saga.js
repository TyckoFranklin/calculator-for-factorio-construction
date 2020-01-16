import { put, takeEvery, select, call } from 'redux-saga/effects'
import * as actions from '../redux/actions';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import {addLoading,removeLoading} from './loadingUtilities';

const listGameItemTypes = `query ListGameItemTypes(
    $filter: ModelgameItemTypeFilterInput
    $limit: Int
    $nextToken: String
) {
    listGameItemTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            gameId
            entities {
                items{
                    id
                }
            }
        }
    }
}`;


function* fetchAllGameTypes(action) {
    const loadingId = {};
    yield call(addLoading, loadingId);
    try {
        /* get list of all game types and list of all types */
        const result = yield API.graphql(graphqlOperation(listGameItemTypes,{limit:1000}));
        console.log({result})
        const currentGameTypes = yield select(state=>state.gameTypes);
        const payload = new Map(currentGameTypes);
        for(const value of result.data.listGameItemTypes.items){
            payload.set(value.id, value);
        }
        yield put({
            type:actions.SET_GAME_TYPES,
            payload,
        })
    }
    catch (e) {
        console.error(e);
    }

    yield call(removeLoading, loadingId);
}

export function* watchFetchAllGameTypes() {
    yield takeEvery(actions.FETCH_GAME_TYPES, fetchAllGameTypes);
}

