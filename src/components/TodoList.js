import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = (props) => {
  return (
    <div className='listWrapper'>
      <button className='removeCompleted' onClick={props.removeCompleted}>
        Remove completed
      </button>

      {props.todos.map((todo) => (
        <Todo todo={todo} toggleTodo={props.toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
