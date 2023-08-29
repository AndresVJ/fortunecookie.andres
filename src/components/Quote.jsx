import React from 'react'

const Quote = ({phrase}) => {

  console.log(phrase)

  return (

    <p className ='container_phrase'>{phrase.phrase}</p>
  )
}

export default Quote