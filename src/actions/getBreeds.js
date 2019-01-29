
import * as request from 'superagent';
import { setBreeds } from './setBreeds'

export const GET_BREEDS = 'GET_BREEDS';

export function getBreeds () {
 return function (dispatch) {
  request('https://dog.ceo/api/breeds/list/all')
  .then(response => dispatch(setBreeds(response.body.message)))
 }
}
  