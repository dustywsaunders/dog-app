
import * as request from 'superagent';
import { setImage } from './setImage'

export const GET_IMAGE = 'GET_IMAGE';

export function getImage () {
 return function (dispatch) {
  request('https://dog.ceo/api/breed/akira/images')
  .then(response => dispatch(setImage(response.body.message)))
 }
}
  