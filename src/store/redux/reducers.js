import { combineReducers } from 'redux'
import * as A from './actions';

export const entities = (state = new Map([["Engine","s"],["Gear","w"]]), action) =>
    action.type === A.SET_ENTITIES ? action.payload : state;

export const recipes = (state = new Map([["Engine","s"],["Gear","w"]]), action) =>
    action.type === A.SET_RECIPES ? action.payload : state;

export const tabs = (state = new Map([["a","b"],["c","d"]]), action) =>
    action.type === A.SET_TABS ? action.payload : state;

export const selectedEntity = (state = "", action) =>
    action.type === A.SET_SELECTED_ENTITY ? action.payload : state;

export const loading = (state = new Set(), action) =>
    action.type === A.SET_LOADING ? action.payload : state;

export const loadedComponents = (state = new Set(), action) =>
    action.type === A.SET_LOADED_COMPONENTS ? action.payload : state;

export default combineReducers({
    entities,
    recipes,
    tabs,
    selectedEntity,
    loading,
    loadedComponents,
});