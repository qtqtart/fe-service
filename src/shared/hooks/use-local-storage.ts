import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  init: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return init;

    try {
      const localStorageItem = localStorage.getItem(key);

      return localStorageItem ? JSON.parse(localStorageItem) : init;
    } catch (error) {
      console.error(error);

      return init;
    }
  });

  useEffect(() => {
    const handleChange = (event: StorageEvent) => {
      if (event.key === key) {
        const value = event.newValue ? JSON.parse(event.newValue) : init;

        setStoredValue(value);
      }
    };

    window.addEventListener("storage", handleChange);

    return () => {
      window.removeEventListener("storage", handleChange);
    };
  }, [key, init]);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
