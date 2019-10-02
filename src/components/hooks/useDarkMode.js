import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
  const [darkModeActive, setDarkModeActive] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if(darkModeActive){
      return style={body: "dark-mode"}
    }
    return style ={body: initialValue};
  }, [darkModeActive])
}