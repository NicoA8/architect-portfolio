import React from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
    isDark: false,
    setTheme: () => {},
});

export function ThemeContextWrap({ children }) {
    const [isDark, setIsDark] = useState(false);
    const setTheme = () => setIsDark(!isDark);
    return (
        <>
            <ThemeContext.Provider value={{ isDark, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    );
}
