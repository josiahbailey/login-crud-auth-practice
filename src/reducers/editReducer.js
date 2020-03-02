import {
   TOGGLE_EDIT,
   SET_MEMBER
} from '../actions/editActions'

const initialState = {
   isEditing: false,
   memberToEdit: {}
}

export const editReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_EDIT:
         return {
            ...state,
            isEditing: action.payload
         }
      case SET_MEMBER:
         return {
            ...state,
            memberToEdit: action.payload
         }
      default:
         return state
   }
}
