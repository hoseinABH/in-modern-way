import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const API_KEY = process.env.REACT_APP_API_SECRET;

export const api = async (type, page) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return response;
};
