import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData() // to get the data from the loader function

  // const [data, setData] = useState({})
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res)
  //       setData(res)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <h1>{data.name}</h1>
      <img src={data.avatar_url} width={300} alt="profile_pic" />
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Geekykiran')
  
  return response.json()
}