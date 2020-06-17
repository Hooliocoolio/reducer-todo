import React from 'react';

const AddTodo  = ({ dispatch }) => {
    const [item, setItem] = useState("");
    

    const handleChanges = e => {
        setItem(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: item
        });
        setItem("");

        const clearCompleted = e => {
            e.preventDefault();
            dispatch({
                type: "CLEAR_COMPLETED"
            });
        };
    
    return (  
        <div>
        <form  onSubmit={submitForm} className="container">
    <input 
        class="form-control" 
        type="text" 
        name="todo"
        onChange={handleChanges}
        value={item}
        placeholder="THings u gotta do!"></input>
        <button>Add Todo</button>
        </form>
    </div>
    );
}
}

export default AddTodo;