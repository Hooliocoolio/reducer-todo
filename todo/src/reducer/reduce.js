

export const todo =  [
    {
        item: 'Learn about Reducers',
        completed: false,
        id: Date.now()
    }
]

export const reducer = (state, action) => {
    switch(action.tyoe){
        case 'ADD_TODO': 
            return[
                ...state,
                {item: action.payload, completed:false, id: Date.now()}
                ]
        
        case 'TODO_COMPLETED':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }; 
                    }
                return todo;
                 })
            
        case 'CLEAR_TODO':
            return state.filter(todo =>  !todo.completed)
        
        default:
            return state;
            }


    }