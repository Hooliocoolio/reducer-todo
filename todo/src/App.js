import React, { useReducer } from 'react';
import { reducer, initialState, ADD_TODO, TOGGLE_COMPLETE, CLEAR_COMPLETED } from './reducers/reducer';
import TodoList from './components/TodoList';
import Form from './components/Form';
import './App.css'


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const addTodo = (e, todo) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: todo
    });
  }

  const toggleTodo = todoId => {
    dispatch({
      type: TOGGLE_COMPLETE,
      payload: todoId
    });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: CLEAR_COMPLETED
    });
  };

  return (
    <div className="App">
    <div className="header">
      <h1>TodoList</h1>
      <Form addTodo={addTodo} />
    </div>
    <TodoList
    todos={state.todos}
    toggleTodo={toggleTodo}
    clearCompleted={clearCompleted}
    />
  </div>
    );
}

export default App;





// import React, { useReducer } from 'react';
// import { initialState, reducer } from './reducers/reducer';
// // import Form from './components/Form'
// import './App.css';

// import Todos from './components/Todos'
// import TodoList from './components/TodoList';

// function App(props) {

//   const [initialState, dispatch] = useReducer(reducer )
//   const addTodo = (e, todo) => {
//     e.preventDefault();
//     dispatch({
//       type: 'ADD_TODO',
//       payload: todo,
//       completed: false
//     })
//   }

//   return (
//     <div>
//           <Todos todo={addTodo} />
//       </div>
//   )
// }






// // const toggleTodo = toggleId => {
// //   dispatch({
// //     type: 'TOGGLE_TODO',
// //     payload: toggleId
// //   })
// // }


// export default App;
// took 20 min to install dependendcies on the laptop....................

//   const [state, dispatch] = useReducer(reducer, initialState)
//   const addTodo = (e,todo) => {
//     e.preventDefault();
//     dispatch({ type: 'ADD_TODO', payload: todo})
//   }
//   const toggleTodo = toggleid => {
//     dispatch({ type: 'TOGGLE_TODO', payload: toggleid })
//   }

//   const clearCompleted = e => {
//     e.preventDefault();
//     dispatch({ type: 'CLEAR_COMPLETED' })
//   }
//   return (
//     <div className="App">
//      <h1>Todos</h1>
//      <Todos toggleTodo={toggleTodo} todos={state.todos} />
//      <Form addTodo={addTodo} clearCompleted={clearCompleted}/>
//     </div>
//   );
// }

// export default App;
