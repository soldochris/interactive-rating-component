
import { useState } from 'react'
import './Survey.css'

function Survey({setRating}){

  const [currentVal, setCurrentVal] = useState(0)

  function handleSubmit(event){
    event.preventDefault()
    setRating(currentVal)
  }

  return (
    <section className="survey">
      <img src="/images/icon-star.svg" alt="icon" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="radio" 
            name="value" 
            id="1" 
            value="1"
            onChange={(e)=>setCurrentVal(e.target.value)}
          />
          <label htmlFor="1">1</label>

          <input 
            type="radio" 
            name="value" 
            id="2" 
            value="2"
            onChange={(e)=>setCurrentVal(e.target.value)}
          />
          <label htmlFor="2">2</label>

          <input 
            type="radio" 
            name="value" 
            id="3" 
            value="3"
            onChange={(e)=>setCurrentVal(e.target.value)}
          />
          <label htmlFor="3">3</label>

          <input 
            type="radio" 
            name="value" 
            id="4" 
            value="4"
            onChange={(e)=>setCurrentVal(e.target.value)}
          />
          <label htmlFor="4">4</label>

          <input 
            type="radio" 
            name="value" 
            id="5" 
            value="5"
            onChange={(e=>setCurrentVal(e.target.value))}
          />
          <label htmlFor="5">5</label>
        </div>
        <button type="submit" >Submit</button>
      </form>
    </section>
  )
}

export { Survey }