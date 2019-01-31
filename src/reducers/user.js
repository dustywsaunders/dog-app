import { ADD_USER } from "../actions/addUser";
import { ADD_POINT } from "../actions/addPoint";
import { SET_CURRENT } from "../actions/setCurrent";



const defUser = {
  points: 0
}


export default  (state = defUser, action = {}) => {
  switch (action.type) {
    case ADD_USER:
    const newUser = action.payload
    return newUser
  
    case ADD_POINT:
    return { ...state, points: state.points + action.payload.points }

    case SET_CURRENT:
    return [

    ]

     default:
      return state
  }
}
