import React from 'react'

const Fragments = ({propsFragments}) => {
  return (
    <>
        <h1>primeiro titulo</h1>
        <h2>segundo titulo</h2>
        <h3>{propsFragments}</h3>
    </>
  )
}

export default Fragments