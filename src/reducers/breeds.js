
import { SET_BREEDS } from "../actions/setBreeds";

const initialState = {}

export default  (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BREEDS:
     let newState = action.payload
     return newState

     default:
      return state
  }
}
