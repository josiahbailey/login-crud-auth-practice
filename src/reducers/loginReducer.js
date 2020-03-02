import {
   LOGIN_ATTEMPT,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   LOGOUT
} from '../actions/loginActions'

const initialState = {
   isFetching: false,
   error: ''
}

export const loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_ATTEMPT:
         return {
            ...state,
            isFetching: true,
         }
      case LOGIN_SUCCESS:
         window.localStorage.setItem('token', action.payload)
         return {
            ...state,
            isFetching: false,
            error: ''
         }
      case LOGIN_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      case LOGOUT:
         window.localStorage.removeItem('token')
         return {
            ...state
         }
      default:
         return state
   }
}