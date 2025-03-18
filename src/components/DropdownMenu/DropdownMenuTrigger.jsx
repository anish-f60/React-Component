import { useContext } from "react";
import { DropdownMenuCtx } from "./DropdownMenu";

const DropdownMenuTrigger = ({ children }) => {
  const { toggleDropdown } = useContext(DropdownMenuCtx);

  return <button onClick={toggleDropdown}>{children}</button>;
};

export default DropdownMenuTrigger;
