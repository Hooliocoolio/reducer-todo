import React from 'react';


function Todo({ todo, dispatch }) {
    const toggleCompleted = () => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
            payload: todo.id
        });
    };

    return (

        <div
            onClick={toggleCompleted}
            style= {props.todo.completed ? { textDecoration: 'line-through' } : null}>
            <p>{todo.item}</p>



        </div>
    );
}