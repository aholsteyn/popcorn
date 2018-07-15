import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import movies from './movie';

const rootReducer = combineReducers({
  movies,
	loadingBar: loadingBarReducer,
});

export default rootReducer;