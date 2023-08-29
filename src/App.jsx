import './App.css'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import BtnQuote from './components/BtnQuote'
import React, { useState } from 'react'
import getRandomElemArray from './utils/getRamdomElementArray'

const App = () => {

  const phrasesRandom = getRandomElemArray(phrases)
  const numberRandom = getRandomElemArray( [1,2,3,4,5,6,7 ] )

  const [quote, setQuote] = useState(getRandomElemArray(phrases))
  const [numberBg,setnumberBg] = useState(numberRandom)
  


  const bgStyle = {
   backgroundImage:`url(/fondo${numberBg}.jpg)`
  }

  return (
    <div className ='container' style={bgStyle}>
    <h1 className='container_title'>Galleta de la Fortuna</h1>
    <Quote phrase ={quote}  />
    <BtnQuote 
    setQuote={setQuote}
    phrases={phrases}
    setnumberBg={setnumberBg}
    />
   </div>

  )
}

export default App



