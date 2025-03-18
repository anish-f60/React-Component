import { useContext } from "react";
import { DropdownMenuCtx } from "./DropdownMenu";

const DropdownMenuItem = ({ className = "", children, ...props }) => {
  const { toggleDropdwown } = useContext(DropdownMenuCtx);

  return (
    <button
      onClick={() => {
        toggleDropdwown();
        if (props.onClick) {
          props.onClick();
        }
      }}
      className={`h-8 min-w-32 flex items-center justify-between rounded-sm hover:bg-gray-300/30 mx-1 px-2 bg-green-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default DropdownMenuItem;
