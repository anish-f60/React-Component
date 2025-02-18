import { createContext, useEffect, useState } from "react";

export const SelectContext = createContext(null);

export const Select = ({
  selectItem,
  selectedItem,
  isItemSelected,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <SelectContext.Provider
      value={{
        selectedItem,
        isOpen,
        toggleDropdown,
        selectItem,
        isItemSelected,
      }}
    >
      <div className="w-[180px]">{children}</div>
    </SelectContext.Provider>
  );
};
