
const SearchFilter = ({ search, filter, setFilter, setSearch }) => {

  const hadnleInputChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSelectChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <section className="section-searchFilter container">
      <input value={search} type="text" placeholder="search" onChange={hadnleInputChange}></input>
      <div>
        <select value={filter} onChange={handleSelectChange} className="select-section">
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Ocenia">Ocenia</option>
        </select>
      </div>
    </section>
  )
}

export default SearchFilter
