
import * as request from 'superagent';
import { setImage } from './setImage'

export const GET_IMAGE = 'GET_IMAGE';

export function getImage () {
 return function (dispatch) {
  request('https://dog.ceo/api/breed/hound/images')
  // .then(response => console.log(response.body.message[1]))
  .then(response => dispatch(setImage(response.body.message[1])))
 }

}
  