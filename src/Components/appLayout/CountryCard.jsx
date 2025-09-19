import {NavLink} from 'react-router-dom'
const CountryCard = ({country}) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box" >
        <img src={flags.svg} alt={flags.alt}></img>
        <div className="countryInfo">
          <p className="card-title">{name.common.length>10? name.common.slice(0,10) +"...":name.common}</p>
          <p>Capital:
              <span className="card-description">{capital[0]}
              </span>
          </p>
          <p>Region:
              <span className="card-description">{region}
              </span>
          </p>
          <p>Population:
              <span className="card-description">{population}
              </span>
          </p>
          <NavLink to={`/country/${name.common}`}>
               <button>Read More</button>
          </NavLink>
          
        </div>
      </div>
    </li>
    
  )
}

export default CountryCard
