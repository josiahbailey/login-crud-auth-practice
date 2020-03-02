import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { addData, editData } from '../actions/crudActions'
import { toggleEdit, setMember } from '../actions/editActions'

import Friend from './Friend'

const FriendForm = (
   { addData, editData, toggleEdit, setMember, isEditing, memberToEdit }) => {
   const [friend, setFriend] = useState({
      name: '',
      age: 0,
      email: '',
      id: Date.now()
   })
   const history = useHistory()

   useEffect(() => {
      if (isEditing === true) {
         setFriend(memberToEdit)
      }
   }, [isEditing])

   const handleChange = e => {
      setFriend({
         ...friend,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault()
      if (isEditing === true) {
         editData(friend)
         setMember({})
         toggleEdit(false)
      } else if (isEditing === false) {
         addData(friend)
      }
      history.push('/friends')
      setFriend({
         name: '',
         age: 0,
         email: '',
         id: Date.now()
      })
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' name='name' value={friend.name} placeholder='name' />
            <input onChange={handleChange} type='number' name='age' value={friend.age} placeholder='age' />
            <input onChange={handleChange} type='text' name='email' value={friend.email} placeholder='email' />
            <button type='submit'>{isEditing ? 'Finish Edit' : 'Add Friend'}</button>
         </form>
         <Friend friend={friend} />
         <button onClick={() => history.push('/friends')}>Back</button>
      </div>
   );
}

const mapStateToProps = state => (
   {
      isEditing: state.editReducer.isEditing,
      memberToEdit: state.editReducer.memberToEdit
   }
)

export default connect(mapStateToProps, { addData, editData, toggleEdit, setMember })(FriendForm);