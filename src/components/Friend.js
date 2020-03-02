import React from 'react';

const Friend = ({ friend }) => {
   const { name, age, email } = friend
   return (
      <div>
         <h3>Name: {name}</h3>
         <h3>Age: {age}</h3>
         <h3>Email: {email}</h3>
      </div>
   );
}

export default Friend;