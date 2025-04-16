import { useContext } from "react";
import { TooltipCtx } from "./Tooltip";

const TooltipTrigger = ({ children }) => {
  const { handleMouseOver, handleMouseLeave, refs } = useContext(TooltipCtx);

  return (
    <div
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="bg-red-400"
      ref={refs.triggerRef}
    >
      {children}
    </div>
  );
};

export default TooltipTrigger;
