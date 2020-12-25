import { useState, useRef } from "react";

function Todo() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    let handleAddTodo = e => {
        let {value} = e.target
        setTodo(value)
    }

    let handleSubmit = e => {
        e.preventDefault()
        setTodos(prevState => ([...prevState, {id: prevState.length + 1, text: todo}]))
        setTodo('')
    }

    let handleRemove= id => {
        let items = todos.filter(todo => todo.id !== id)
        setTodos(state => {
            return [...items]
        })
    }

    let handleEdit = (text, id) => {
        let items = todos
        let index = todos.findIndex(todo=>todo.id === id)
        if (!items[index].edit) {
            items[index].text = text
            items[index].edit = true
        }
        else {
            items[index].edit = false
        }
        setTodos(state=>{
            return [...items]
        })
    }

    let changeTodoText = (id, e) => {
        let items = todos
        let index = todos.findIndex(todo => todo.id === id)
        items[index].text = e.target.value
        setTodos(state => {
            return [...items]
        })
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