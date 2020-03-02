import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const login = user => dispatch => {
   dispatch({ type: LOGIN_ATTEMPT })
   axiosWithAuth()
      .post(`/login`, user)
      .then(res => {
         dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
      })
      .catch(err => {
         dispatch({ type: LOGIN_FAIL, payload: err })
      })
}

export const LOGOUT = 'LOGOUT'

export const logout = () => {
   return {
      type: LOGOUT
   }
}

