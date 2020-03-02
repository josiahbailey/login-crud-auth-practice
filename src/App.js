import React from 'react';
import { Route, Link } from 'react-router-dom'

import FriendDashboard from './components/FriendDashboard'
import LoginForm from './components/LoginForm'
import FriendPage from './components/FriendPage'
import FriendForm from './components/FriendForm'

import { PrivateRoute } from './utils/PrivateRoute'

function App() {
   return (
      <div className="App">
         <Route exact path='/'>
            <h1>WELCOME TO PRACTICE</h1>
            <Link to='/login' ><button>Login</button></Link>
         </Route>
         <Route exact path='/login' component={LoginForm} />
         <PrivateRoute exact path='/friends' component={FriendDashboard} />
         <PrivateRoute exact path='/friends/:id' component={FriendPage} />
         <PrivateRoute exact path='/friend-form' component={FriendForm} />
      </div>
   );
}

export default App;
