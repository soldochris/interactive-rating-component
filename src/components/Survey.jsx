import './Survey.css'

function Survey(){
  return (
    <section className="survey">
      <img src="/images/icon-star.svg" alt="" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </p>
      <form>
        <div>
          <label htmlFor="1">1</label>
          <input type="radio" name="value" id="1" value="1"/>

          <label htmlFor="2">2</label>
          <input type="radio" name="value" id="2" value="2"/>

          <label htmlFor="3">3</label>
          <input type="radio" name="value" id="3" value="3"/>

          <label htmlFor="4">4</label>
          <input type="radio" name="value" id="4" value="4"/>

          <label htmlFor="5">5</label>
          <input type="radio" name="value" id="5" value="5"/>
        </div>
        <button>Submit</button>
      </form>
    </section>
  )
}

export { Survey }