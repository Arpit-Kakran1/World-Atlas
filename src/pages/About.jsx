import countryFact from '../api/countryData.json'
const Country = () => {
  return (
    <section className="section-about container">
      <h5 className='container-title'>
        Here Are The Some Interseting Facts
      </h5>
      <div className="gradient-cards">
        {countryFact.map((country) => {
          const {id,countryName,capital,population,interestingFact}=country
          return (
             <div className="card" key={id}>
          <div className="container-card">
            <p className="card-title">
              {countryName}
            </p>
            <p>Capital:
              <span className="card-description">{capital}
              </span>
            </p>
            <p>Population:
              <span className="card-description">{population}
              </span>
            </p>
            <p>Interesting Fact:
              <span className="card-description">{interestingFact}
              </span>
            </p>
          </div>
        </div>
          )
          
        })}
       
      </div>
    </section>
  )
}

export default Country
