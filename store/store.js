import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'

// Define your initial state
const initialState = {
  language: '',
};

// Define reducer functions
const languageReducer = (state = initialState.language, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return  action.payload;
    case 'RESET_STORES':
      return initialState.language;
    default:
      return state;
  }
};

const appReducer = combineReducers({
    language: languageReducer,
})

const rootReducer = (state, action) => {
  if(action.type === 'RESET_STORES') {
    state = undefined;
  }
  return appReducer(state, action);
}

// Create the store
const store = configureStore({reducer:rootReducer});

export default store;