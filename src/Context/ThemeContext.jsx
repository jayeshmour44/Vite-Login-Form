import { createContext, useEffect, useState } from "react";
import React from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("light")

    const toggleTheme = () =>{
        setTheme(theme === "light" ? "dark" : "light")
    }

useEffect(()  => {
    document.body.className = theme;
}, [theme])

return(
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
}