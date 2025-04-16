import React, { useContext } from "react";
import { TooltipCtx } from "./Tooltip";
import { createPortal } from "react-dom";

const TooltipContent = ({ children }) => {
  const { isTooltipVisible, refs, contentStyle } = useContext(TooltipCtx);

  if (!isTooltipVisible) {
    return null;
  }

  return createPortal(
    <div
      ref={refs.contentRef}
      style={{ ...contentStyle }}
      className="p-1 bg-black/40 text-xs fixed top-0 left-0 rounded-md"
    >
      {children}
    </div>,
    document.body
  );
};

export default TooltipContent;
