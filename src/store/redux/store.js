import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import reducers from './reducers';
import sagas from '../sagas/sagaIndex';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
        reducers,
        compose(applyMiddleware(logger, sagaMiddleware))
        );

sagaMiddleware.run(sagas);

window.store = store;

export default store;

