import { useEffect, useState } from "react";

export const useDebounce = (value: any, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("new time out");
      setDebouncedValue(value);
    }, delay);

    return () => {
      console.log("clear times");
      clearTimeout(id);
    };
  }, [value, delay]);
  return debouncedValue;
};
