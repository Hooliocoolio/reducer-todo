export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const initialState = {
  todos: [
    {
      id: 1,
      todo: "need to finish",
      completed: false
    },
    {
      id: 2,
      todo: "need to start",
      completed: false
    }
  ]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        todo: action.payload,
        id: Date.now(),
        completed: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
