import React from 'react'

const Map = () => {
    const students = [{
        name: 'Usman',
        email: 'usmansaleem2799@gmail.com'
      },
      {
        name: 'Bilal',
        email: 'bilalmalik076@gmail.com'
      }
    ];
  return (
    <div className="App">
      <h1>Handle Array With List</h1>
    {
      students.map((data, index)=>
       <div key={index}> <h1 >My Name is: {data.name}</h1>
        <p>My Email is: {data.email} </p></div>
      )
    }
    </div>
  )
}

export default Map
