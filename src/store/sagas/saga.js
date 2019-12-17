import { put, takeEvery } from 'redux-saga/effects'
import * as actions from '../redux/actions';
// import { API, graphqlOperation, Auth, Storage } from 'aws-amplify';
// import * as mutations from '../../graphql/mutations'
// import * as queries from '../../graphql/queries'
import uuid from 'uuid';

function* firstSaga(action) {
    const {content,
    order,
    config} = action.payload.value;
    // const result = yield API.graphql(graphqlOperation(mutations.updateSlide, {input:{id:action.payload.key, content, order,config}}));
}

export function* watchFirstSaga() {
    yield takeEvery("actions.UPDATE_SLIDE", firstSaga);
}