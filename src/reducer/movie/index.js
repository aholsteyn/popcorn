import { SHOW_MOVIE, SHOW_ERROR } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MOVIE:
      return action.movie;
		case SHOW_ERROR:
			return action.error;
    default:
      return state;
  }
};