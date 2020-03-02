export const TOGGLE_EDIT = 'TOGGLE_EDIT'
export const SET_MEMBER = 'SET_MEMBER'

export const setMember = friend => {
   return {
      type: SET_MEMBER,
      payload: friend
   }
}

export const toggleEdit = bool => {
   return {
      type: TOGGLE_EDIT,
      payload: bool
   }
}