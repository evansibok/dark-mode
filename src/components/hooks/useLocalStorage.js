import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
	// Initial State to store value
	const [storedValue, setStoredValue] = useState(() => {
		// Get the stored value from localStorage by key
		const currentItem = window.localStorage.getItem(key);
		// if currentItem exists return Parsed json otherwise return initialValue
		return currentItem ? JSON.parse(currentItem) : initialValue;
	});


	return [storedValue, setStoredValue]

}