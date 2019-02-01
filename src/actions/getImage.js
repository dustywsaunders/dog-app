import * as request from 'superagent';
import { setImage } from './setImage';

export const GET_IMAGE = 'GET_IMAGE';

export function getImage (current) {

 return function (dispatch) {
  request(`https://dog.ceo/api/breed/${ current }/images`)
  .then(response => dispatch(setImage(response.body.message[Math.floor(Math.random() * response.body.message.length)])))
 }
}