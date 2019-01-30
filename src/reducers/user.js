import { ADD_USER } from "../actions/addUser";
import { ADD_POINT } from "../actions/addPoint";

export default  (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_USER:
    const newUser = action.payload
    return newUser
  
    case ADD_POINT:
    console.log('this is state', state)
    return [
      ...state
    ]

     default:
      return state
  }
}
