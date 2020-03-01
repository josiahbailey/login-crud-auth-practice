import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer'
import { crudReducer } from './crudReducer'

export const reducer = combineReducers({
   loginReducer,
   crudReducer
})