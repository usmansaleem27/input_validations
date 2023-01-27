import React, { useState } from 'react'

const Hooks = () => {
    const [count, setcount] = useState(()=>{
        return 0
    })

    function decreamentCount (){
        setcount(prevcount => prevcount - 1)
    }
    function increamentCount (){
        setcount(prevcount => prevcount + 1)
    }
    
  return (
    <div className='App'>
      <button type="button" className='btn btn-primary me-5' onClick={decreamentCount}>-</button>
      <span>{count}</span>
      <button type="button" className='btn btn-primary ms-5' onClick={increamentCount}>+</button>

    </div>
  )
}

export default Hooks
