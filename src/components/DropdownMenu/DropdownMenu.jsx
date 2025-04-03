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

  const toggleDropdown = (e) => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdownMenu = (event) => {
    if (
      refs.contentRef.current &&
      !refs.contentRef.current.contains(event.target) &&
      refs.triggerRef.current &&
      !refs.triggerRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      const triggerRef = refs.triggerRef.current;
      const contentRef = refs.contentRef.current;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const GAP_BETWEEN_TRIGGER = 8;
      const SCREEN_MARGIN = 10;

      const triggerRect = triggerRef.getBoundingClientRect();
      const contentRect = contentRef.getBoundingClientRect();

      let contentY = triggerRect.top + triggerRect.height + GAP_BETWEEN_TRIGGER;
      let contentX =
        triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;

      const isOverflowingBottom = contentY + contentRect.height > windowHeight;
      const isOverflowingTop =
        triggerRect.top - contentRect.height - GAP_BETWEEN_TRIGGER < 0;

      if (isOverflowingBottom && isOverflowingTop) {
        contentY = triggerRect.top + triggerRect.height + GAP_BETWEEN_TRIGGER;
      } else if (isOverflowingBottom) {
        contentY = triggerRect.top - contentRect.height - GAP_BETWEEN_TRIGGER;
      } else if (isOverflowingTop) {
        contentY = triggerRect.top + triggerRect.height + GAP_BETWEEN_TRIGGER;
      }

      const isOverflowingLeft = contentX < SCREEN_MARGIN;
      const isOverflowingRight =
        contentX + contentRect.width > windowWidth - SCREEN_MARGIN;

      if (isOverflowingLeft) {
        contentX = triggerRect.left;
      } else if (isOverflowingRight) {
        contentX = windowWidth - contentRect.width;
      }

      setContentStyle({
        visibility: "visible",
        opacity: "1",
        transform: `translate(${contentX}px, ${contentY}px)`,
        zIndex: "50",
      });
      document.body.style.pointerEvents = "none";
      document.addEventListener("mousedown", closeDropdownMenu);
    } else {
      setContentStyle({
        visibility: "hidden",
        opacity: "0",
      });
      document.body.style.removeProperty("pointer-events");
      document.removeEventListener("mousedown", closeDropdownMenu);
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
