import { ADD_USER } from "../actions/addUser";
import { ADD_POINT } from "../actions/addPoint";
const defUser = {
  points: 0
}

export default  (state = defUser, action = {}) => {
  switch (action.type) {
    case ADD_USER:
    const newUser = action.payload
    return newUser
  
    case ADD_POINT:
    state.points += 1

     default:
      return state
  }
}
