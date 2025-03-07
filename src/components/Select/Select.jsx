import { createContext, useEffect, useRef, useState } from "react";

export const SelectContext = createContext(null);

export const Select = ({
  selectItem,
  selectedItem,
  isItemSelected,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const refs = {
    triggerRef: useRef(null),
    contentRef: useRef(null),
  }

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
        refs,
      }}
    >
      <div className="w-[180px]" aria-labelledby="select-trigger">{children}</div>
    </SelectContext.Provider>
  );
};
