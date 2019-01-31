import { ADD_USER } from "../actions/addUser";

export default  (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_USER:
    const newUser = action.payload
    return newUser
  

     default:
      return state
  }
}
