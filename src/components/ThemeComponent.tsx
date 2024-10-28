import React, { useContext , CSSProperties} from "react";
import { ThemeContext } from "./Punto3";

const ThemeComponent: React.FC = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("ThemedComponent debe ser utilizado dentro de un ThemeProvider");

    }

    const { theme, toggleTheme } = context;

    const styles: CSSProperties = {
        background: theme === "Claro" ? "#fff" : "#333",
        color: theme === "Claro" ? "#333" : "#fff",
        padding: "20px",
        textAlign: "center",
        border: "1px solid gray",
    };

    return (
        <div style={styles}>
            <p>El tema actual es {theme}</p>
            <button className="btn btn-primary"onClick={toggleTheme}>Cambiar Tema</button>
        </div>
    );
}
export default ThemeComponent;