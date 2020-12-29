import {createReducer} from '@reduxjs/toolkit'


export const todo = createReducer('', {
    AddTodo: (state, action) => action.payload,
    EditTodo: (state, action) => action.payload,
})

export const todos = createReducer([], {
    AddTodos: (state, action) => [...state, action.payload],
    RemoveTodos: (state, action) => state.filter(todo => todo.id !== action.payload),
    EditTodos: (state, action) => action.payload,
})