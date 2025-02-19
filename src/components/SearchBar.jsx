import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center my-5">
      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-1/2 rounded-l-md focus:outline-none"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
