export const SearchInput = ({ serchValue, setSearchValue }: any) => {
  return (
    <input
      className="search-input"
      type="text"
      value={serchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search"
      autoFocus
    />
  );
};
