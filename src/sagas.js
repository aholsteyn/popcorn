import "regenerator-runtime/runtime";
import { takeLatest, call, put } from "redux-saga/effects";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import axios from "axios";
import * as actions from './reducer/movie/actions';

import { API_URL } from './constants';
import { API_KEY } from './constants';

export function* watcherSaga() {
  yield takeLatest('GET_MOVIE', workerSaga);
}

function getMovie(movie) {
  return axios.get(`${API_URL}?${API_KEY}&t=${movie}`);
}

function* workerSaga(action) {
  try {
		// show loading bar
		yield put(showLoading());
		
		// fetch movie
    const movie = yield call(getMovie, action.movie);
		
    // dispatch action to show movie
    yield put(actions.showMovie(movie.data));
  
  } catch (error) {
		// dispatch error
    yield put(actions.showError(error));
		
  } finally {
		// hide loading bar
    yield put(hideLoading());
  }
}