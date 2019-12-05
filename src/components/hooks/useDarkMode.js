import { useEffect } from 'react'
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-theme");

  // wrap the setting of dark mode to take effect whenever darkMode changes
  useEffect(() => {
    darkMode
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
    return () => { };
  }, [darkMode]);

  return [darkMode, setDarkMode]
}