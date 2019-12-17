import { combineReducers } from 'redux'
import * as A from './actions';

export const users = (state = new Map(), action) =>
    action.type === A.ADD_USER ? action.payload : state;

export default combineReducers({
    users,
})