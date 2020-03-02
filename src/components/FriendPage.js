import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteData, getFriend } from '../actions/crudActions'
import { setMember, toggleEdit } from '../actions/editActions'

const FriendForm = (
   { friend, isFetching, error, deleteData, setMember, toggleEdit, getFriend }) => {
   const { name, age, email } = friend
   const match = useRouteMatch()
   const id = match.params.id

   const handleEdit = e => {
      toggleEdit(true)
      setMember(friend)
   }

   const deleteFriend = e => {
      deleteData(friend)
   }

   useEffect(() => {
      getFriend(id)
   }, [])

   return (
      <div>
         {isFetching ? <h2>Loading...</h2> : error ? <h2>REQUEST ERROR</h2> :
            <div>
               <Link to='/friend-form'><button onClick={handleEdit}>Edit</button></Link>
               <Link to='/friends'><button onClick={deleteFriend}>X</button><br /></Link>
               <h3>Name: {name}</h3>
               <h3>Age: {age}</h3>
               <h3>Email: {email}</h3>
            </div>
         }
         <Link to='/friends'><button>Back</button></Link>
      </div>
   );
}

const mapStateToProps = state => (
   {
      friend: state.crudReducer.friend,
      isFetching: state.crudReducer.isFetching,
      error: state.crudReducer.error
   }
)

export default connect(mapStateToProps, { deleteData, getFriend, setMember, toggleEdit })(FriendForm);