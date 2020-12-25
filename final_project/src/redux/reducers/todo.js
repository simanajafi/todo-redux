import {createReducer} from '@reduxjs/toolkit'
// import {reducer} from 'redux'

// export function todo(state='', action) {
//     switch (action.type) {
//         // case ''
//     }
// }

export const todo = createReducer('', {
    AddTodo: (state, action) => action.payload,
    EditTodo: (state, action) => action.payload,
})

export const todos = createReducer([], {
    AddTodos: (state, action) => [...state, action.payload],
    RemoveTodos: (state, action) => state.filter(todo => todo.id !== action.id),
    EditTodos: (state, action) => action.payload
})