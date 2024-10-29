import React, { useContext , CSSProperties} from "react";
import { ThemeContext } from "./Punto3";

const ThemeComponent: React.FC = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("ThemedComponent debe ser utilizado dentro de un ThemeProvider");

    }

    const { theme, toggleTheme } = context;

    const styles: CSSProperties = {
        background: theme === "Claro" ? "#fff" : "#fff",
        color: theme === "Claro" ? "#333" : "#333",
        padding: "20px",
        textAlign: "center",
        borderRadius: "24px",
        border: "1px solid gray",
        filter: theme === "Claro" ? "invert(0)" : "invert(1)",
    };

    return (
        <div style={styles}>
            <p>El tema actual es {theme}</p>
            <button className="btn btn-primary"onClick={toggleTheme}>Cambiar Tema</button>
        </div>
    );
}
export default ThemeComponent;