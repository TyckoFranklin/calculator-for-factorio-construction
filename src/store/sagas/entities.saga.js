import { put, takeEvery, select, call } from 'redux-saga/effects'
import * as actions from '../redux/actions';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'
import {addLoading,removeLoading} from './loadingUtilities';

const listEntities = `query ListEntitys(
    $filter: ModelentityFilterInput
    $limit: Int
    $nextToken: String
    ) {
    listEntitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
        items {
            id
            gameId
            name
            wiki_link
            gameItemType {
                id
                gameId
            }
            category {
                id
                gameId
            }
            recipes {
                items {
                    id
                }
            }
        }
        nextToken
        }
    }
`;


function* fetchAllEntities(action) {
    const loadingId = {};
    yield call(addLoading, loadingId);
    try {
        /* get list of all Entities and list of all types */
        const result = yield API.graphql(graphqlOperation(listEntities,{limit:1000}));
        console.log({result})
        const currentEntities = yield select(state=>state.Entities);
        const payload = new Map(currentEntities);
        for(const value of result.data.listEntitys.items){
            payload.set(value.id, value);
        }
        yield put({
            type:actions.SET_ENTITIES,
            payload,
        })
    }
    catch (e) {
        console.error(e);    }

    yield call(removeLoading, loadingId);
}

export function* watchFetchAllEntities() {
    yield takeEvery(actions.FETCH_ENTITIES, fetchAllEntities);
}

