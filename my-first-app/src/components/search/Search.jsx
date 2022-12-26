const Search = ({ handleKeyUp }) => {
  return(
    <div className="my-4">
        <input
          type="text"
          onInput={handleKeyUp}
          placeholder="Search by name..."
        />
      </div>
  )
}

export default Search;