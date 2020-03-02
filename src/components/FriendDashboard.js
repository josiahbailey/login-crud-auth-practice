import React from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/loginActions'

import Friend from './Friend'

const FriendDashboard = ({ logout }) => {
   const history = useHistory()

   const handleLogout = e => {
      logout()
      history.push('/login')
   }
   return (
      <div>
         <h2>Dashboard</h2>
         <button onClick={handleLogout} >Logout</button>
      </div>
   );
}

export default connect(null, { logout })(FriendDashboard);