import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="todolist">
      {props.todos.map(todo => (
      <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
    ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
    );
};

export default TodoList;