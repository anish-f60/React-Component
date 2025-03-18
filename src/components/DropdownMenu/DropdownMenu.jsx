import { createContext, useState } from "react";

export const DropdownMenuCtx = createContext();

const DropdownMenu = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdwown = () => setIsDropdownOpen((prevState) => !prevState);

  return (
    <DropdownMenuCtx.Provider value={{ isDropdownOpen, toggleDropdwown }}>
      {children}
    </DropdownMenuCtx.Provider>
  );
};

export default DropdownMenu;
