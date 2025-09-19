import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import CountryCard from "../Components/appLayout/CountryCard"
import SearchFilter from '../Components/ui/SearchFilter'
const Country = () => {
  const [isPending, startTransition] = useTransition()
  const [countries, setCountries] = useState([])

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } else return country;
  }

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  }

  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data)
    })
  }, [])

  if (isPending) <h1>Loading</h1>

  return (
    <section className="country-section">
      <SearchFilter search={search} filter={filter} setSearch={setSearch} setFilter={setFilter} />
      <ul className="grid grid-four-cols">
        {filterCountries.map((currCountry, index) => {
          return <CountryCard country={currCountry} key={index}></CountryCard>
        })}
      </ul>

    </section>
  )
}

export default Country
