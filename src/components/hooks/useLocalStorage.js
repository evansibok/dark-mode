import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
	// Initial State to store value
	const [storedValue, setStoredValue] = useState(() => {
		// Get the stored value from localStorage by key
		const currentItem = window.localStorage.getItem(key);
		// if currentItem exists return Parsed json otherwise return initialValue
		return currentItem ? JSON.parse(currentItem) : initialValue;
	});


	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = value => {
		// Allow value to be a function so we have same API as state
		const valueSaved = value instanceof Function ? value(storedValue) : value;
		// save the value to state
		setStoredValue(valueSaved)
		// save the value stringified to localStorage
		window.localStorage.setItem(key, JSON.stringify(valueSaved))
	}

	return [storedValue, setValue];
}