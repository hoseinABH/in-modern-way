import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import movieReducer from './movieReducer';

export default combineReducers({
  movies: movieReducer,
  error: errorReducer,
});
