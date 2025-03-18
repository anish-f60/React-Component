import { useContext } from "react";
import { DropdownMenuCtx } from "./DropdownMenu";

const DropdownMenuTrigger = ({ children }) => {
  const { toggleDropdown, refs } = useContext(DropdownMenuCtx);

  return (
    <button
      ref={refs.triggerRef}
      onClick={toggleDropdown}
      className="border rounded-md px-4 h-8 cursor-pointer
    "
    >
      {children}
    </button>
  );
};

export default DropdownMenuTrigger;
