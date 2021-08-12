// useBeforeLeave

import { useEffect } from 'react';

export const useBeforeLeave = (onBefore) => {
  const handle = (e) => {
    // clientY 마우스의 y 축의 위치 기준으로 0 보다 작은경우 함수 실행 (top 위치일때)
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    // cleanUp
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
};