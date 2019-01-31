import { ADD_USER } from "../actions/addUser";
import { ADD_POINT } from "../actions/addPoint";
import { SET_CURRENT } from "../actions/setCurrent";

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

    case SET_CURRENT:
    return [

    ]

     default:
      return state
  }
}
