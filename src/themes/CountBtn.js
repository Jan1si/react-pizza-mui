import { Button, createTheme, styled } from '@mui/material';

export const CountBtn = styled(Button)(({theme}) => ({
    minWidth: theme.root.minWidth,
    border: theme.root.border,
    borderRadius: theme.root.borderRadius,
    backgroundColor: theme.root.backgroundColor,
    boxShadow: theme.root.boxShadow,
    color: theme.root.color,
}));

export const themeCountBtn = createTheme({
    root: {
        minWidth: "auto",
        border: "2px solid #FE5F1E",
        borderRadius: "50%",
        backgroundColor: "white",
        boxShadow: "none",
        color: "#ccc",
    }
});