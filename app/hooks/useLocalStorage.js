import React, { useState } from 'react';

export function useLocalStorage(key, value) {
  // state to store the value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // get stored value by key
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (err) {
      console.log(err);
      // return whatever value was passed in
      return value;
    }
  });

  // set value to local storage
  const setValue = value => {
    try {
      // make a function for hooks
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  }

  return [storedValue, setValue];
}
