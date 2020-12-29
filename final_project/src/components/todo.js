import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid'

import {addTodo} from './../redux/actions/todo'
import {addTodos} from './../redux/actions/todo'
import {removeTodos} from './../redux/actions/todo'
import {editItemTodos} from './../redux/actions/todo'
import {editTodoText} from './../redux/actions/todo'


function Todo() {
    const todos = useSelector(state => state.todos)
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()

    let handleAddTodo = e => {
        let {value} = e.target
        dispatch(addTodo(value))
    }

    let handleSubmit = e => {
        e.preventDefault()
        dispatch(addTodos({id: uuidv4(), text: todo, edit: false}))
        dispatch(addTodo(''))
    }

    console.log(todos)

    let handleRemove= id => {
        dispatch(removeTodos(id))
    }

    let handleEdit = (id) => {
        dispatch(editItemTodos(todos, id))
    }

    let changeTodoText = (id, e) => {
        dispatch(editTodoText(todos, id, e.target.value))
    }

    return (
        <div className="col-md-4 mt-3">
            <form onSubmit={handleSubmit}>
                <span data-testid="span">Add Todo: </span>
                <input type="text" id="inputText" value={todo} data-testid="inputText" onChange={handleAddTodo}  />
                <button data-testid="addButton" type="submit">Add Todo</button>
            </form>
            <hr />
            <h4>Todos List</h4>
            <ol id="todo-list">
                {todos.map(todo =>
                    <li key={todo.id}>
                        <input className={`todo-text ${todo.edit ? 'enable-input': 'disable-input'}`} 
                                value={todo.text} onChange={e => changeTodoText(todo.id, e)} />
                        <span className="todo-control">
                            <button onClick={() => handleEdit(todo.id)}>
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