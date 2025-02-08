import React, { useRef } from 'react';

const useThrottle = (cb, wait) => {
  let lastRun = useRef(Date.now());
  let currentArgs = useRef();
  let timer = useRef();

  return (...args) => {
    if (Date.now() - lastRun.current >= wait) {
      cb(...args);
      lastRun.current = Date.now();
    } else {
      currentArgs.current = args;
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        cb(...args);
        lastRun.current = Date.now();
      }, wait);
    }
  };
};

export default useThrottle;
