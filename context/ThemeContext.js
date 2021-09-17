import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return [useContext(ThemeContext), useContext(ThemeUpdateContext)];
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={setDarkTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
