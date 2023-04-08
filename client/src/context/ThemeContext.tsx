import { createContext, useState, useLayoutEffect } from 'react';
import { ContextProviderProps, ThemeContextValue } from './Type';

export const ThemeContext = createContext<null | ThemeContextValue>(null);

export const ThemeProvider = ({ children } : ContextProviderProps) => {

    const [mode, setMode] = useState('dark');

    const toggleMode = () => setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');

    useLayoutEffect(() => {
        if (mode === "dark") document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove("dark");
    }, [mode]);

    return (
        <ThemeContext.Provider value={{
            mode,
            toggleMode,
        }}>
            { children }
        </ThemeContext.Provider>
    );

};