import {configureStore} from '@reduxjs/toolkit'
import reducers from './../reducers/index'
import { loadState, saveState } from './localStorage.js'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const persistState = loadState();

const store = createStore(reducers, persistState, applyMiddleware(thunk))

// const store = configureStore({
    // reducer: reducers,
// },persistState);

store.subscribe(() => {
    saveState(store.getState());
})

export default store