import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function GetFriend() {
    const [friend, setFriend] = useState([]);
    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res.data)
            setFriend(res.data)
        })
        .catch(err => {
            console.log({err})
        })
    }, [])


return (
  <div>
      {friend.map((friend) => (
          <div className='getFriend' key={friend.id}>
            <div className='getName'>Name: {friend.name}</div>
            <div className='getAge'> Age: {friend.age}</div>
            <div className='getEmail'> Email: {friend.email}</div>
            </div>
      ))}

  </div>
)
}
