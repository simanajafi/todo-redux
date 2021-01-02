// import {configureStore} from '@reduxjs/toolkit'
import reducers from './../reducers/index'
import { loadState, saveState } from './localStorage.js'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import {logger} from 'redux-logger'
// import {persistReducer, persistStore} from 'redux-persist';

const persistState = loadState();

// const persistConfig = {
    // key: 'root',
    // storage: persistState,
// }

const store = createStore(reducers, persistState, applyMiddleware(thunk))
// const _persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
    // reducer: _persistedReducer,
    // middleware: [thunk, logger],
// });

store.subscribe(() => {
    saveState(store.getState());
})

export default store