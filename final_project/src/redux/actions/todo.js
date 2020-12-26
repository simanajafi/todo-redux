import {createAction} from '@reduxjs/toolkit'

export const addTodo = createAction('AddTodo')

export const addTodos = createAction('AddTodos')

export const removeTodos = createAction('RemoveTodos')

// const editTodo = createAction('EditTodo')

export const editTodos = createAction('EditTodos')


export function editItemTodos(todos, id, text) {
    return dispatch => {
        let items = []
        items = todos.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    edit: !item.edit
                }
            }
            return item
        })
        dispatch(editTodos(items))
    }
}

export function editTodoText(todos, id, value) {
    return dispatch => {
        let items = []
        items = todos.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    text: value,
                }
            }
            return item
        })
        dispatch(editTodos(items))
    }
}