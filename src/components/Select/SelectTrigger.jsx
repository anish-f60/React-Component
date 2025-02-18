import { useContext } from "react";
import { SelectContext } from "./Select";
import { ChevronDown, ChevronUp } from "lucide-react";

export const SelectTrigger = ({ children }) => {
  const { isOpen, toggleDropdown } = useContext(SelectContext);

  return (
    <button
      onClick={toggleDropdown}
      className="w-full h-8 flex items-center justify-between border border-gray-300 px-2 rounded-md"
    >
      {children}
      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>
  );
};
