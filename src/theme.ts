import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#333333', // Tom de cinza escuro
        },
        secondary: {
            main: '#cccccc', // Tom de cinza claro
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Apple Color Emoji"'
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;
