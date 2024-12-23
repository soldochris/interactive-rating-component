function Survey(){
  return (
    <section>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </p>
      <form action="">
        <div>
          <label htmlFor="">
            1
            <input type="radio" name="1" id="1" />
          </label>
          <label htmlFor="">
            2
            <input type="radio" name="2" id="2" />
          </label>
          <label htmlFor="">
            3
            <input type="radio" name="3" id="3" />
          </label>
          <label htmlFor="">
            4
            <input type="radio" name="4" id="4" />
          </label>
          <label htmlFor="">
            5
            <input type="radio" name="5" id="5" />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </section>
  )
}

export { Survey }