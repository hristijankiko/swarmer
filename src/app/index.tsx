import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "react-jss";
import App from "./app";
import darkTheme from "./themes/dark";

render(
    <ThemeProvider theme={darkTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById("react-root"),
);
