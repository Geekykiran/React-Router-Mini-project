import React from 'react'
import { useParams } from "react-router-dom"

function User() {
  const { userid } = useParams() // to get the data from the URL



  if (userid === undefined) {
    return (
      <div className='bg-orange-500 text-black text-3xl text-center py-5'>User </div>
    )
  }
  else {
    return (
      <div className='bg-orange-500 text-black text-3xl text-center py-5'>User: {`${userid.charAt(0).toUpperCase() + userid.slice(1).toLowerCase()}`}</div>
    )
  }
}

export default User

