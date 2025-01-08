import './Result.css'

function Result({rating}){
  return(
    <section className="result">
      <img src="/images/illustration-thank-you.svg" alt="illustration thank you" />
      <p className='pill'>You selected {rating} out of 5</p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </p>
    </section>
  )
}

export { Result }