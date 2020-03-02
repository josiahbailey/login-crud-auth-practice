import React from 'react';
import { Route, Link } from 'react-router-dom'

import FriendDashboard from './components/FriendDashboard'
import LoginForm from './components/LoginForm'

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
      </div>
   );
}

export default App;
