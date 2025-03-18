import { createContext, useEffect, useRef, useState } from "react";

export const DropdownMenuCtx = createContext();

const DropdownMenu = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [contentStyle, setContentStyle] = useState({
    visibility: "hidden",
    opacity: "0",
  });

  const refs = {
    triggerRef: useRef(null),
    contentRef: useRef(null),
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      const triggerRef = refs.triggerRef.current;
      const contentRef = refs.contentRef.current;
      const GAP_BETWEEN_TRIGGER = 8;

      const triggerRect = triggerRef.getBoundingClientRect();
      const contentRect = contentRef.getBoundingClientRect();

      let contentY = triggerRect.top + triggerRect.height + GAP_BETWEEN_TRIGGER;
      let contentX =
        triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;

      setContentStyle({
        visibility: "visible",
        opacity: "1",
        transform: `translate(${contentX}px, ${contentY}px)`,
      });
    } else {
      setContentStyle({
        visibility: "hidden",
        opacity: "0",
      });
    }
  }, [isDropdownOpen]);

  return (
    <DropdownMenuCtx.Provider
      value={{ isDropdownOpen, contentStyle, refs, toggleDropdown }}
    >
      {children}
    </DropdownMenuCtx.Provider>
  );
};

export default DropdownMenu;
