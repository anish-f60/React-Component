import { useContext } from "react";
import { Check } from "lucide-react";
import { SelectContext } from "./Select";

export const SelectItem = ({ value, children }) => {
  const { selectItem, isItemSelected, toggleDropdown } =
    useContext(SelectContext);
  const isSelected = isItemSelected(value);

  return (
    <li className="w-full" role="option">
      <button
        className="w-full h-8 px-2 rounded-md text-sm flex items-center gap-1 hover:bg-gray-300/60"
        onClick={() => {
          toggleDropdown();
          selectItem(value);
        }}
        aria-selected={isSelected}
      >
        <Check
          size={16}
          className={`${isSelected ? "visible" : "invisible"}`}
        />
        <span>{children}</span>
      </button>
    </li>
  );
};
