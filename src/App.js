import React, { useState } from 'react'

const App = () => {
  const rima =[{ id:1,color:'blue'}]
  const kamal = rima.map((t)=>{
    return t.color
  })
  const mahan = {Car:'Ford'}
  console.log(mahan)
 
  const[baha,setBaha] = useState(kamal)
  return (
    <div>
      <h1>{baha}</h1>
    </div>
  )
}

export default App
