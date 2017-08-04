import { combineReducers } from 'redux'

import messageReducer from './message'
import messageReadReducer from './messageRead'

export default combineReducers({
  message: messageReducer,
  messageRead: messageReadReducer
})
