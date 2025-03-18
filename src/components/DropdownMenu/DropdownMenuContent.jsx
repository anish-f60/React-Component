import { useContext } from "react";
import { DropdownMenuCtx } from "./DropdownMenu";
import { createPortal } from "react-dom";

const DropdownMenuContent = ({ className = "", children }) => {
  const { isDropdownOpen } = useContext(DropdownMenuCtx);

  if (!isDropdownOpen) {
    return null;
  }

  return createPortal(
    <div
      className={`flex flex-col py-2 rounded-md bg-red-300 shadow-2xl fixed top-0 left-0 ${className}`}
    >
      {children}
    </div>,
    document.body
  );
};

export default DropdownMenuContent;
