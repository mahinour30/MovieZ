import axios from 'axios';
import { APIKey, BaseURL } from '../utils';

export const getMovies = () => {
  return axios
    .get(`${BaseURL}?api_key=${APIKey}`)
    .catch(function (error) {
      console.log(error);
    })
};