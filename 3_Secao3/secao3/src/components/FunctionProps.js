import React from 'react'

const FunctionProps = ({myFunction}) => {
  return (
    <div>
        <h1>function na props</h1>
        <button onClick={myFunction}>consolelog</button>
    </div>
  )
}

export default FunctionProps