
import { SET_IMAGE } from "../actions/setImage";

export default  (state = [], action = {}) => {
  switch (action.type) {
    case SET_IMAGE:
     return action.payload

     default:
      return state
  }
}
