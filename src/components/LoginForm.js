import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import { login } from '../actions/loginActions'

const LoginForm = ({ login, isFetching, error }) => {
   const [user, setUser] = useState({
      username: '',
      password: ''
   })
   const history = useHistory()

   const handleChange = e => {
      setUser({
         ...user,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault()
      login(user)
      setTimeout(() => {
         history.push('/friends')
      }, 100)
   }

   return (
      <div>
         {isFetching ? <h2>Loading...</h2> : error ? <h2>Invalid Login<br /> Please Try Again</h2> : <h2>Login</h2>}
         <form onSubmit={handleSubmit}>
            <input onChange={handleChange}
               value={user.username}
               name='username'
               type='text'
               placeholder='username' />
            <input onChange={handleChange}
               value={user.password}
               name='password'
               type='password'
               placeholder='password' /><br />
            <button type='submit' >Login</button>
         </form>
      </div>
   );
}

const mapStateToProps = state => (
   {
      isFetching: state.loginReducer.isFetching,
      error: state.loginReducer.error
   }
)

export default connect(mapStateToProps, { login })(LoginForm);