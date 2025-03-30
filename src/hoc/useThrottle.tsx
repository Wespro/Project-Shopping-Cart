import React, { useRef } from 'react';

const useThrottle = (cb: (...args: any[]) => void, wait: number) => {
  let lastRun = useRef<number>(Date.now());
  let currentArgs = useRef<any[]>([]);
  let timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: any[]): void => {
    if (Date.now() - lastRun.current >= wait) {
      cb(...args);

      lastRun.current = Date.now();
    } else {
      currentArgs.current = args;
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        cb(...args);
        lastRun.current = Date.now();
      }, wait);
    }
  };
};

export default useThrottle;
