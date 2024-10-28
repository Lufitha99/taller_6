import React,{ createContext, useState, ReactNode} from "react";

export const ThemeContext = createContext<{
    theme: string;
    toggleTheme: () =>void;
} | undefined>(undefined);

export const ThemeProvider : React.FC <{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<string>('Claro');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'Claro' ? 'Oscuro' : 'Claro'));
    };

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}