import { useEffect, useState } from 'react';

const useDebounce = (val: string | number, delay: number) => {
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
