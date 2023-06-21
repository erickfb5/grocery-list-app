const SearchItem = ({ search, setSearch }) => (
  <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
    <label htmlFor="search">Search</label>
    <input
      id="search"
      type="text"
      role="searchbox"
      autoComplete="off"
      maxLength={50}
      placeholder="Search Items"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  </form>
);

export default SearchItem;