import accountReducer from './account'
import userReducer from './user'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  account: accountReducer,
  user: userReducer
})


export default rootReducer