import { useEffect, useState } from 'react';

const useDebounce = (val, delay) => {
  const [debouncedVal, setDebouncedVal] = useState(val);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedVal(val);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [val, delay]);
  return debouncedVal;
};

export default useDebounce;
