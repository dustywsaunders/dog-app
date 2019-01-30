
import { combineReducers } from 'redux'
import breeds from './breeds'
import image from './image'
import user from './user'

export default combineReducers({
  image,
  breeds,
  user
})
