import {
   FETCH_DATA,
   FETCH_SUCCESS,
   FETCH_FAIL,
   ADD_DATA,
   ADD_SUCCESS,
   ADD_FAIL,
   EDIT_DATA,
   EDIT_SUCCESS,
   EDIT_FAIL,
   DELETE_DATA,
   DELETE_SUCCESS,
   DELETE_FAIL
} from '../actions/crudActions'


const initialState = {
   friends: [],
   isFetching: false,
   error: '',
   postError: '',
   editError: '',
   deleteError: ''
}

export const crudReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_DATA:
         return {
            ...state,
            isFetching: true
         }
      case FETCH_SUCCESS:
         return {
            ...state,
            friends: action.payload,
            isFetching: false,
            error: ''
         }
      case FETCH_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      case ADD_DATA:
         return {
            ...state,
            isFetching: true
         }
      case ADD_SUCCESS:
         return {
            ...state,
            friends: action.payload,
            isFetching: false,
            postError: ''
         }
      case ADD_FAIL:
         return {
            ...state,
            isFetching: false,
            postError: action.payload
         }
      case EDIT_DATA:
         return {
            ...state,
            isFetching: true
         }
      case EDIT_SUCCESS:
         return {
            ...state,
            friends: action.payload,
            isFetching: false,
            postError: ''
         }
      case EDIT_FAIL:
         return {
            ...state,
            isFetching: false,
            editError: action.payload
         }
      case DELETE_DATA:
         return {
            ...state,
            isFetching: true
         }
      case DELETE_SUCCESS:
         return {
            ...state,
            friends: action.payload,
            isFetching: false,
            postError: ''
         }
      case DELETE_FAIL:
         return {
            ...state,
            isFetching: false,
            deleteError: action.payload
         }
      default:
         return state
   }
}