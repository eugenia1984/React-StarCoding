const Search = ({ handleKeyUp }) => {
  return(
    <div className="my-4">
        <input
          type="text"
          onInput={handleKeyUp}
          placeholder="Buscar por nombre..."
        />
      </div>
  )
}

export default Search;