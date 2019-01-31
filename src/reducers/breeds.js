
import { SET_BREEDS } from "../actions/setBreeds";


export default  (state = { allbreeds: null }, action = {}) => {
  switch (action.type) {
    case SET_BREEDS:
     let newState = action.payload
     return newState

     default:
      return state
  }
}
