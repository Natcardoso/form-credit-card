import React, { useState } from "react";
import { Form } from "./components/Form";
import { GlobalStyle } from "./style/globalStyle";
import { ThemeProvider } from "styled-components";
import light from "./style/themes/light";
import dark from "./style/themes/dark";

function App() {
    const [theme, setTheme] = useState(light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Form toggleTheme={toggleTheme} />
        </ThemeProvider>
    );
}

export default App;
