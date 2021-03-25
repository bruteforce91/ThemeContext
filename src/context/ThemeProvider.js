import { createContext,useReducer, useState} from "react";
import ThemeReducer from "./ThemeReducer";

const themeState = {
  dark: false,
  toggleDark: () => {},
};

export const ThemeContext = createContext(themeState);


 const ThemeProvider=({children})=> {
  const [dark, setDark] = useState(false)
  
  const toggleDark = (currentTheme) => {
    if(dark !==currentTheme){
      setDark(currentTheme)
    }
  }
    return( <ThemeContext.Provider value={{
        dark, toggleDark,
    }}>
      {children}
    </ThemeContext.Provider>)
  }

export default ThemeProvider