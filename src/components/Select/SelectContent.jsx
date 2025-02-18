import { useContext } from "react";
import { SelectContext } from "./Select";

export const SelectContent = ({ children }) => {
  const { isOpen } = useContext(SelectContext);

  if (!isOpen) {
    return null;
  }

  return (
    <ul className="mt-2.5 p-1 w-full max-h-[250px] min-h-[100px] overflow-auto border border-gray-300 rounded-md">
      {children}
    </ul>
  );
};
