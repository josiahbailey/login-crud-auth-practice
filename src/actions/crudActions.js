import { axiosWithAuth } from '../utils/axiosWithAuth'

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const getData = () => dispatch => {
   dispatch({ type: FETCH_DATA })
   axiosWithAuth()
      .get('/friends')
      .then(res => {
         dispatch({ type: FETCH_SUCCESS, payload: res.data })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: FETCH_FAIL, payload: err })
      })
}

export const ADD_DATA = 'ADD_DATA'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_FAIL = 'ADD_FAIL'

export const addData = friend => dispatch => {
   dispatch({ type: ADD_DATA })
   axiosWithAuth()
      .post('/friends', friend)
      .then(res => {
         console.log(res.data)
         dispatch({ type: ADD_SUCCESS, payload: res.data })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: ADD_FAIL, payload: err })
      })
}

export const EDIT_DATA = 'EDIT_DATA'
export const EDIT_SUCCESS = 'EDIT_SUCCESS'
export const EDIT_FAIL = 'EDIT_FAIL'

export const editData = friend => dispatch => {
   dispatch({ type: EDIT_DATA })
   axiosWithAuth()
      .put(`/friends/${friend.id}`)
      .then(res => {
         console.log(res.data)
         dispatch({ type: EDIT_SUCCESS, payload: res.data })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: EDIT_FAIL, payload: err })
      })
}

export const DELETE_DATA = 'DELETE_DATA'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAIL = 'DELETE_FAIL'

export const deleteData = friend => dispatch => {
   dispatch({ type: DELETE_DATA })
   axiosWithAuth()
      .delete(`/friends/${friend.id}`)
      .then(res => {
         console.log(res.data)
         dispatch({ type: DELETE_SUCCESS, payload: res.data })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: DELETE_FAIL, payload: err })
      })
}