import React, {useState} from 'react'

const Rendered = () => {
  const [user, setUser] = useState("I'm conditionally rendering here")
  const changeName = () => {
    const value = user;
    if(value === "I'm conditionally rendering here"){
        setUser("I'm not conditionally rendering here")
    }  
    else(
        setUser("I'm conditionally rendering here")
    )
}
  return (
    <div className='App mt-5 pt-5'>
      <h3>{ user }</h3>
      <p>{ setUser }</p>
      <button className='btn btn-primary' onClick={changeName}>Click Here</button>
    </div>
  )
}

export default Rendered
