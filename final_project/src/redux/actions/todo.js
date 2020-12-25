import {createAction} from '@reduxjs/toolkit'

export const addTodo = createAction('AddTodo')

export const addTodos = createAction('AddTodos')

export const removeTodos = createAction('RemoveTodos')

// const editTodo = createAction('EditTodo')

const editTodos = createAction('EditTodos')


export function editCurrent(todos, id, text) {
    return dispatch => {
        let items = todos
        let index = todos.findIndex(todo=>todo.id === id)
        if (!items[index].edit) {
            items[index].text = text
            items[index].edit = true
        }
        else {
            items[index].edit = false
        }
        dispatch(editTodos(items))
    }
}

export function editTodoText(todos, id, value) {
    return dispatch => {
        let items = todos
        let index = todos.findIndex(todo => todo.id === id)
        items[index].text = value
        dispatch(editTodos(items))
    }
}