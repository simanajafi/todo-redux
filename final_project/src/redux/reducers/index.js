import {combineReducers} from 'redux'
import {todo, todos} from './todo'
// import { loadState } from './../store/localStorage.js'

// const persistState = loadState();


export default combineReducers({
    todo,
    todos,
})