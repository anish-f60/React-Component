import { useContext } from "react";
import { SelectContext } from "./Select";

export const SelectContent = ({ children }) => {
  const { isOpen, refs } = useContext(SelectContext);

  if (!isOpen) {
    return null;
  }

  return (
    <ul
      role="listbox" // ARIA role for the dropdown
      aria-labelledby="select-trigger"
      ref={refs.contentRef}
      className="mt-2.5 p-1 w-full max-h-[250px] min-h-[100px] overflow-auto border border-gray-300 rounded-md"
    >
      {children}
    </ul>
  );
};
