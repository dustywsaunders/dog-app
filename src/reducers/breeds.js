
import { SET_BREEDS } from "../actions/setBreeds";


export default  (state = {}, action = {}) => {
  switch (action.type) {
    case SET_BREEDS:
     let newState = action.payload
     return newState

     default:
      return state
  }
}
