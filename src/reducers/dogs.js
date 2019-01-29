import { SET_BREEDS } from "../actions/setBreeds";


export default  (state = {}, action = {}) => {
  switch (action.type) {
    case SET_BREEDS:
     const newBreeds = {} 
     return newBreeds.breeds = action.payload

     default:
      return state
  }
}
