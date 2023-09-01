import React, { useState, useReducer } from 'react';
// ! Use reducer example 
const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}



// !             State,  object
const reducer = (todos, action) => {
    console.log('ACTION', action);
    console.log('TODO', todos);
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, {id: new Date(), todo:action.payload.todo, isComplete:false}]
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if(todo.id === action.payload.id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo
            })
    }
}

const Todos = (props) => {
    const [todo, setTodo] = useState('');
    const [todoList, dispatch] = useReducer(reducer, [])

    const addTodo = (e) => {
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO, payload:{todo:todo}})
    }
    const toggleTodo = (id) => {
        dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id:id}})
    }

    return (
        <div>
            <h2>Add A Todo</h2>
            <form onSubmit={addTodo}>
                <label>Todo: </label>
                <input type="text" name='todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button>Add todo</button>
            </form>
            {
                todoList.map((todo) => (
                    <div>
                        <p>todo: {todo.todo}</p>
                        <button onClick={() => toggleTodo(todo.id)}>Toggle Todo</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Todos;