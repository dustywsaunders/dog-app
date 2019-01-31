import { ADD_USER } from "../actions/addUser";
import { ADD_POINT } from "../actions/addPoint";
import { SET_CURRENT } from "../actions/setCurrent";
import { MINUS_POINT } from "../actions/minusPoint";



const defUser = {
  points: 0,
  wrong: 0,
  known: []
}


export default  (state = defUser, action = {}) => {

  switch (action.type) {
    case ADD_USER:
    return { ...state, firstName: action.payload.firstName }
  
    case ADD_POINT:
    return { ...state, points: state.points + action.payload.points }
   
    case MINUS_POINT:
    return { ...state, wrong: state.wrong + action.payload.points }




     default:
      return state
  }
}
