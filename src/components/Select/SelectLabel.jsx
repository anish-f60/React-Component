import { Search, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { SelectContext } from "./Select";

export const SelectLabel = ({ handleSearch, children }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [search, setSearch] = useState("");

  const toggleSearch = () => {
    setIsSearchVisible((prevState) => !prevState);
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(search);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  return (
    <li className="w-full h-8 px-1.5">
      {isSearchVisible ? (
        <div className="w-full h-full flex items-center border rounded-md">
          <input
            className="h-full grow outline-none"
            onChange={handleSearchInput}
          />
          <button
            onClick={() => {
              toggleSearch();
              setSearch("");
            }}
            className="w-5 h-5 flex shrink-0 items-center justify-center"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-between">
          <span className="text-sm font-semibold">{children}</span>
          <button
            onClick={toggleSearch}
            className="h-5 w-5 rounded-full bg-gray-300 flex justify-center items-center"
          >
            <Search size={12} />
          </button>
        </div>
      )}
    </li>
  );
};
