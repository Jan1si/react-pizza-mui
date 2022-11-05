import { Button, createTheme, styled } from '@mui/material';

export const DeleteBtn = styled(Button)(({theme}) => ({
    minWidth: theme.root.minWidth,
    border: theme.root.border,
    borderRadius: theme.root.borderRadius,
    backgroundColor: theme.root.backgroundColor,
    boxShadow: theme.root.boxShadow,
    color: theme.root.color,
}));

export const themeDeleteBtn = createTheme({
    root: {
        minWidth: "auto",
        border: "2px solid #D7D7D7",
        borderRadius: "50%",
        backgroundColor: "white",
        boxShadow: "none",
        color: "#ccc",
    }
})