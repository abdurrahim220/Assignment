import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ setSearch, search }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
