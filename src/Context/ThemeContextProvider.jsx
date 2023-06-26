import { createContext, useState } from "react";
export const ThemeContext = createContext()

import React from 'react'

function ThemeContextProvider({children}) {

    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        if (theme === "dark") setTheme("light")
        if (theme === "light") setTheme("dark")
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider