import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions/loginActions'
import { getData } from '../actions/crudActions'

import Friend from './Friend'

const FriendDashboard = (
   { logout, getData, friends, isFetching, error }) => {
   const history = useHistory()

   useEffect(() => {
      getData()
   }, [])

   const handleLogout = e => {
      logout()
      history.push('/login')
   }
   return (
      <div>
         <h2>Dashboard</h2>
         {isFetching ? <h2>Loading...</h2> : error ? <h2>FETCH ERROR</h2> :
            friends.map(friend => (
               <Link key={friend.id} to={`/friends/${friend.id}`}><Friend friend={friend} /></Link>
            ))
         }
         <button onClick={handleLogout} >Logout</button>
      </div>
   );
}

const mapStateToProps = state => (
   {
      friends: state.crudReducer.friends,
      isFetching: state.crudReducer.isFetching,
      error: state.crudReducer.error
   }
)

export default connect(mapStateToProps, { logout, getData })(FriendDashboard);