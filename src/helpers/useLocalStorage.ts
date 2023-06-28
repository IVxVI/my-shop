import { Product } from './../Types/Product';
import { useState } from 'react';

export const useLocalStorage = (key: string,
  initialValue: [] | number) => {
  const [value, setValue] = useState(() => {
    try {
      const data = localStorage.getItem(key);

      return data ? JSON.parse(data) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const save = (currentValue: Product[]) => {
    setValue(currentValue);
    localStorage.setItem(key, JSON.stringify(currentValue));
  };

  return [value, save];
};