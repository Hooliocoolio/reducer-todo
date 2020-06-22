import uuid from 'uuidv4'

const initialState = {

  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Learn about the other stuff',
      completed: false,
      id: 4892987589
    }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload,
        completed: false,
        id: uuid,
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        })
      }
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      }
    default:
      return state;
  }
}

export default reducer;