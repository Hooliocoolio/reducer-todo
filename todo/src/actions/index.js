import React, {useReducer } from 'react';
import { initialState, reducer } from './reducers/index';

const [state, dispatch] = useReducer(reducer, initialState)
  const addTodo = (e,todo) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todo})
  }
  const toggleTodo = toggleid => {
    dispatch({ type: 'TOGGLE_TODO', payload: toggleid })
  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' })
  }