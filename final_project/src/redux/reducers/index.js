import {combineReducers} from 'redux'
import {todo, todos} from './todo'

export default combineReducers({
    todo,
    todos
})