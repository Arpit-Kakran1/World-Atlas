
const Country = () => {
  //Handling the Data of input field through react 19 features..
  //create a function and pass the attribute formData and then it return an array of key value pairs and then 
  //Convert it to the object and then pass the data to the backend or the console 
  //It let us to handle the multiple fields and also give the featres to hadle the multiple input fields
  const handleFormData = (formData) => {
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData)
  }
  return (
    <section className="section-contact">
      <h2 className="container-title">
        Contact Us
      </h2>
      <div className="contact-wrapper">
        <form action={handleFormData}>
          <input className="form-control"
            type="text"
            required
            autoComplete="off"
            name="username"
            placeholder="Enter Your UserName">
          </input>
          <input className="form-control"
            type="eamil"
            required
            autoComplete="off"
            name="email"
            placeholder="Enter Your email">
          </input>
          <textarea className="form-control"
            rows="10"
            required
            autoComplete="off"
            name="email"
            placeholder="Ask Anything..">
          </textarea>
          <button type="submit">Send</button>
        </form>

      </div>
    </section>
  )
}

export default Country
