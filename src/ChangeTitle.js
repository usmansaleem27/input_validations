import React, {useEffect, useState} from 'react'

const ChangeTitle = () => {
    const [number, setNumber] = useState(0)
    useEffect(()=>{
        document.title=`You Clicked on button ${number}`
    })

  return (
    <div>
      <button type="button" className='btn btn-primary px-3 m-5' onClick={()=>{
        setNumber(number+1)
      }}>Click Me to Change Title {number}</button>
    </div>
  )
}

export default ChangeTitle
