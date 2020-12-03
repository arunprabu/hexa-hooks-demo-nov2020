import React, { useRef, useReducer } from 'react';
import todoReducer from '../reducers/todoReducer';

const Todo = () => {

  // useReducer() return state and dispatch 
  // we use mapStateToProps in redux to get state data from store
  // we use mapDispatchToProps in redux to get dispatch
  const [ todoListState, dispatch ] = useReducer(todoReducer, []); // second arg is initial state

  console.log(todoListState);
  // useRef is another Another hook - will let you setup ref for input fields
  const inputEl = useRef(null);

  let todoList = null;
  todoList = todoListState.map( (todo, index) => {
    return(
      <li className='list-group-item' key={index}>
        {todo.text}
        <button type='button' className='btn btn-danger btn-sm'>Delete Todo</button>
      </li>
    )
  })

  return (
    <div>
      <hr/>
      <h3>Todo App Demo | useReducer() Example</h3>
      <input type='text'
        className='form-control'
        ref={inputEl} />
      <button className='btn btn-primary' 
        onClick={ () => dispatch({type:'ADD_TODO', data: inputEl.current.value })}>Add Todo</button>
      
      <ul className='list-group'>
        {todoList}
      </ul>
    </div>
  )
}

export default Todo;
