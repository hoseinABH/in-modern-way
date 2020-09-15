import { api } from '../../service/movies.service';
import {
  GET_MOVIE_BY_NAME,
  GET_NOW_PLAYING_MOVIE,
  GET_POPULAR_MOVIE,
  SET_ERROR,
  GET_TOP_RATED_MOVIE,
  GET_UPCOMING_MOVIE,
} from '../types';

export const getMoviesByName = (name, page) => async (dispatch) => {
  const movies = await api(name, page);
  const { results } = movies.data;
  dispatch({
    type: GET_MOVIE_BY_NAME,
    payload: results,
  });
};

export const getNowPlayingMovies = () => async (dispatch) => {
  try {
    const movies = await api('now_playing');
    const { results } = movies.data;
    dispatch({
      type: GET_NOW_PLAYING_MOVIE,
      payload: results,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      });
    }
  }
};
export const getPopularMovies = () => async (dispatch) => {
  try {
    const movies = await api('popular');
    const { results } = movies.data;
    dispatch({
      type: GET_POPULAR_MOVIE,
      payload: results,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      });
    }
  }
};
export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const movies = await api('top_rated');
    const { results } = movies.data;
    dispatch({
      type: GET_TOP_RATED_MOVIE,
      payload: results,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      });
    }
  }
};
export const getUpcomingMovies = () => async (dispatch) => {
  try {
    const movies = await api('upcoming');
    const { results } = movies.data;
    dispatch({
      type: GET_UPCOMING_MOVIE,
      payload: results,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      });
    }
  }
};
