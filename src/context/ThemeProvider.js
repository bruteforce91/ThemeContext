import { createContext, useReducer, useState } from "react";
import ThemeReducer from "./ThemeReducer";

const themeState = {
  dark: false,
  toggle: () => {},
};

export const ThemeContext = createContext(themeState);

const ThemeProvider = ({ children }) => {
 // const [dark, setDark] = useState(false);
  const [state,dispatch]=useReducer(ThemeReducer,themeState)
  
  // const toggleDark = (currentTheme) => {
  //   if (dark !== currentTheme) {
  //     setDark(currentTheme);
  //   }
  // };
  const toggle = () => 
      dispatch({type:"toggleMode"})
    

  return (
    <ThemeContext.Provider
      value={{
        state,toggle
      }}
      displayName="ThemeContext"
    >

      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
