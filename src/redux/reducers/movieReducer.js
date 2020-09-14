import {
  GET_NOW_PLAYING_MOVIE,
  GET_POPULAR_MOVIE,
  GET_TOP_RATED_MOVIE,
  GET_UPCOMING_MOVIE,
} from '../types';

const initialState = {
  nowPalyingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  page: 1,
  totalPages: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOW_PLAYING_MOVIE:
      return {
        ...state,
        nowPalyingMovies: action.payload,
      };

    case GET_POPULAR_MOVIE:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case GET_TOP_RATED_MOVIE:
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    case GET_UPCOMING_MOVIE:
      return {
        ...state,
        upcomingMovies: action.payload,
      };

    default:
      return state;
  }
};
