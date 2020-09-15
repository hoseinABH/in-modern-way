import {
  GET_NOW_PLAYING_MOVIE,
  GET_POPULAR_MOVIE,
  GET_TOP_RATED_MOVIE,
  GET_UPCOMING_MOVIE,
  GET_MOVIE_BY_NAME,
} from '../types';

const initialState = {
  moviesByName: [],
  nowPalyingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_NAME:
      return {
        ...state,
        moviesByName: action.payload,
      };
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
