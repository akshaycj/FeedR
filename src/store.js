
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {feedSelected} from './reducers'




export const store = createStore(
    combineReducers({
      select:feedSelected,
    }),
   
  );