// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid'

import {addTodo} from './../redux/actions/todo'
import {addTodos} from './../redux/actions/todo'
import {removeTodos} from './../redux/actions/todo'
import {editCurrent} from './../redux/actions/todo'
import {editTodoText} from './../redux/actions/todo'


function Todo() {
    // const [todo, setTodo] = useState('')
    // const [todos, setTodos] = useState([])
    const todos = useSelector(state => state.todos)
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()

    let handleAddTodo = e => {
        let {value} = e.target
        dispatch(addTodo(value))
        // setTodo(value)
    }

    let handleSubmit = e => {
        e.preventDefault()
        dispatch(addTodos({id: uuidv4(), text: todo, edit: false}))
        dispatch(addTodo(''))
        // setTodos(prevState => ([...prevState, {id: prevState.length + 1, text: todo}]))
        // setTodo('')
    }

    console.log(todos)

    let handleRemove= id => {
        // let items = todos.filter(todo => todo.id !== id)
        dispatch(removeTodos(id))
        // setTodos(state => {
            // return [...items]
        // })
    }

    let handleEdit = (text, id) => {
        dispatch(editCurrent(todos, id, text))
        // let items = todos
        // let index = todos.findIndex(todo=>todo.id === id)
        // if (!items[index].edit) {
        //     items[index].text = text
        //     items[index].edit = true
        // }
        // else {
        //     items[index].edit = false
        // }
        // setTodos(state=>{
            // return [...items]
        // })
    }

    let changeTodoText = (id, e) => {
        let {value} = e.target.value
        dispatch(editTodoText(todos, id, value))
        // let items = todos
        // let index = todos.findIndex(todo => todo.id === id)
        // items[index].text = value
        // setTodos(state => {
            // return [...items]
        // })
    }

    return (
        <div className="col-md-4 mt-3">
            <form onSubmit={handleSubmit}>
                <span>Add Todo: </span>
                <input type="text" id="inputText" value={todo} onChange={handleAddTodo}  />
                <button type="submit">Add Todo</button>
            </form>
            <hr />
            <h4>Todos List</h4>
            <ol id="todo-list">
                {todos.map(todo =>
                    <li key={todo.id}>
                        <input className={`todo-text ${todo.edit ? 'enable-input': 'disable-input'}`} 
                                value={todo.text} onChange={e => changeTodoText(todo.id, e)} />
                        <span className="todo-control">
                            <button onClick={() => handleEdit(todo.text, todo.id)}>
                                {!todo.edit ? 'Edit' : 'Apply'}
                                </button>
                            <button onClick={() => handleRemove(todo.id)}>Remove</button>
                        </span>
                    </li>)}
            </ol>
        </div>
    )
}

export default Todo;