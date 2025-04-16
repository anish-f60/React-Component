import { createContext, useEffect, useRef, useState } from "react";

export const TooltipCtx = createContext(null);

const Tooltip = ({ children, placement = "Top" }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [contentStyle, setContentStyle] = useState({
    visibility: "hidden",
    opacity: "0",
  });

  const refs = {
    triggerRef: useRef(null),
    contentRef: useRef(null),
  };

  const handleMouseOver = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  useEffect(() => {
    if (isTooltipVisible) {
      const GAP_BETWEEN_TRIGGER = 8;
      const SCREEN_MARGIN = 10;

      const triggerRect = refs.triggerRef.current.getBoundingClientRect();
      const contentRect = refs.contentRef.current.getBoundingClientRect();

      let finalPlacement = placement;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const isOverflowing = (x, y) => {
        const rightEdge = x + contentRect.width;
        const bottomEdge = y + contentRect.height;
        return (
          x < SCREEN_MARGIN ||
          y < SCREEN_MARGIN ||
          rightEdge > windowWidth - SCREEN_MARGIN ||
          bottomEdge > windowHeight - SCREEN_MARGIN
        );
      };

      const calculatePosition = (place) => {
        switch (place) {
          case "Top":
            return {
              x:
                triggerRect.left +
                triggerRect.width / 2 -
                contentRect.width / 2,
              y: triggerRect.top - contentRect.height - GAP_BETWEEN_TRIGGER,
            };
          case "Bottom":
            return {
              x:
                triggerRect.left +
                triggerRect.width / 2 -
                contentRect.width / 2,
              y: triggerRect.bottom + GAP_BETWEEN_TRIGGER,
            };
          case "Left":
            return {
              x: triggerRect.left - contentRect.width - GAP_BETWEEN_TRIGGER,
              y:
                triggerRect.top +
                triggerRect.height / 2 -
                contentRect.height / 2,
            };
          case "Right":
            return {
              x: triggerRect.right + GAP_BETWEEN_TRIGGER,
              y:
                triggerRect.top +
                triggerRect.height / 2 -
                contentRect.height / 2,
            };
          default:
            return {
              x:
                triggerRect.left +
                triggerRect.width / 2 -
                contentRect.width / 2,
              y: triggerRect.bottom + GAP_BETWEEN_TRIGGER,
            };
        }
      };

      // First try preferred placement
      let { x, y } = calculatePosition(placement);

      if (isOverflowing(x, y)) {
        // Try the opposite side
        const opposite = {
          Top: "Bottom",
          Bottom: "Top",
          Left: "Right",
          Right: "Left",
        };

        finalPlacement = opposite[placement] || "Bottom";
        ({ x, y } = calculatePosition(finalPlacement));

        // If still overflowing, clamp
        if (isOverflowing(x, y)) {
          x = Math.max(
            SCREEN_MARGIN,
            Math.min(x, windowWidth - contentRect.width - SCREEN_MARGIN)
          );
          y = Math.max(
            SCREEN_MARGIN,
            Math.min(y, windowHeight - contentRect.height - SCREEN_MARGIN)
          );
        }
      }

      setContentStyle({
        visibility: "visible",
        opacity: "1",
        transform: `translate(${x}px, ${y}px)`,
      });
    }
  }, [isTooltipVisible, placement, refs]);

  return (
    <TooltipCtx.Provider
      value={{
        isTooltipVisible,
        handleMouseOver,
        handleMouseLeave,
        refs,
        contentStyle,
      }}
    >
      {children}
    </TooltipCtx.Provider>
  );
};

export default Tooltip;
