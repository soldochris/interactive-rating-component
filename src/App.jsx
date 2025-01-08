
import './App.css'
import { Survey } from './components/Survey'
import { Attribution } from './components/Attribution'
import { useState } from 'react'
import { Result } from './components/Result'

function App() {

  const [rating, setRating] = useState(null)

  return (
    <>
      {
        rating == null ?
        <Survey setRating={setRating}/> :
        <Result rating={rating}/>
      }
      <Attribution/>
    </>
  )
}

export default App