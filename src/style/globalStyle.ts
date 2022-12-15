import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        border: none;
        outline: none;
    }

    :root {
        --primary: #f9748f;
        --secondary: #f78ca0;
    }
`;
