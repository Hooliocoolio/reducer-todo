import React, { useState, useReducer} from 'react';
import { initialState, reducer } from "../reducers/reducer";




 const TodoForm = (props) => {
    const [ dispatch] = useReducer(reducer, initialState);
    const [newTodoItem, setNewTodoItem] = useState("");
    const handleChanges = event => {
        setNewTodoItem(event.target.value);
    } 
    
    
    
    return (
        
    
 
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
    )
}

export default TodoForm;