import { createContext, useState } from "react";

export const DropdownMenuCtx = createContext();

const DropdownMenu = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("helo");
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <DropdownMenuCtx.Provider value={{ isDropdownOpen, toggleDropdown }}>
      {children}
    </DropdownMenuCtx.Provider>
  );
};

export default DropdownMenu;
