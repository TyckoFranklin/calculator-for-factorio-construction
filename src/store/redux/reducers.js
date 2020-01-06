import { combineReducers } from 'redux'
import * as A from './actions';

export const entities = (state = new Map(), action) =>
    action.type === A.SET_ENTITIES ? action.payload : state;

export const recipes = (state = new Map(), action) =>
    action.type === A.SET_RECIPES ? action.payload : state;

export const categories = (state = new Map(), action) =>
    action.type === A.SET_CATEGORIES ? action.payload : state;

export const gameTypes = (state = new Map(), action) =>
    action.type === A.SET_GAME_TYPES ? action.payload : state;

export const selectedEntity = (state = "", action) =>
    action.type === A.SET_SELECTED_ENTITY ? action.payload : state;

export const loading = (state = new Set(), action) =>
    action.type === A.SET_LOADING ? action.payload : state;

export const loadedComponents = (state = new Set(), action) =>
    action.type === A.SET_LOADED_COMPONENTS ? action.payload : state;

export default combineReducers({
    categories,
    entities,
    gameTypes,
    loadedComponents,
    loading,
    recipes,
    selectedEntity,
});