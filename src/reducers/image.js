
import { SET_IMAGE } from "../actions/setImage";

export default  (state = [], action = {}) => {
  switch (action.type) {
    case SET_IMAGE:
     return [
       ...state,
       action.payload
     ]

     default:
      return state
  }
}
