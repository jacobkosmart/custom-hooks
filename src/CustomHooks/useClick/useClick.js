import { useEffect, useRef } from 'react';

export const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      // 'click' is keyword
      element.current.addEventListener("click", onClick);
    }
    //  CleanUp ComponentWillUnmount()
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  if (typeof onClick !== "function") {
    return;
  }
  return element;
};