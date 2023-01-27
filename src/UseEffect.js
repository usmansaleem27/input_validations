import React, { useState } from 'react'

const UseEffect = () => {
    const [resourseType, setResourseType] = useState('Posts')
  return (
    <>
    <div className='App mt-5'>
    <div>
      <button className='btn btn-success me-3' onClick={() => setResourseType('Posts')}>Posts</button>
      <button className='btn btn-success me-3' onClick={() => setResourseType('Users')}>Users</button>
      <button className='btn btn-success me-3' onClick={() => setResourseType('Comments')}>Comments</button>
    </div>
    <h1>{resourseType}</h1>
    </div>
    </>
  )
}

export default UseEffect
