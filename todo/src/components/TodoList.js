import React, { useState, useReducer } from "react";

import { initialState, reducer } from "../reducers/reducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodoItem, setNewTodoItem] = useState("");

  const handleChanges = event => {
    setNewTodoItem(event.target.value);
  };

  return (
    <div className="container">
      <div>
        <h1 className="emTitle">To Do List</h1>
        <div>
          <form>
            <input value={newTodoItem} onChange={handleChanges} />
            <button
              onClick={event => {
                event.preventDefault();
                dispatch({ type: "ADD_TODO", payload: newTodoItem });
                setNewTodoItem("");
              }}
              className="toDoButton"
            >
              Add New To Do
            </button>
          </form>
        </div>
        <button
          onClick={event => {
            event.preventDefault();
            dispatch({ type: "CLEAR_COMPLETED" });
          }}
        >
          Clear Completed
        </button>
        <div className="toDoListContainer notCompleted">
          {state.map(item => (
            <div key={item.id} className="toDoItem">
              <h3>{item.item}</h3>
              <input
                type="checkbox"
                value={item.completed}
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_COMPLETED",
                    payload: {
                      item: item.item,
                      completed: item.completed,
                      id: item.id
                    }
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;