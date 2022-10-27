import { Button, createTheme, styled } from "@mui/material";

export const CardBtnSize = styled(Button)(({ theme }) => ({
    color: theme.root.color,
    borderRadius: theme.root.borderRadius,
    backgroundColor: theme.root.backgroundColor,
    textTransform: theme.root.textTransform,
    fontFamily: theme.root.fontFamily,
    boxShadow: theme.root.boxShadow,
    "&:hover": {
        backgroundColor: theme.hover.backgroundColor,
        boxShadow: theme.hover.boxShadow,
    },
}));

export const themeCardBtnSize = createTheme({
    root: {
        color: "#2C2C2C",
        borderRadius: "5px",
        backgroundColor: "#ffffff5d",
        textTransform: "lowercase",
        fontFamily: "Proxima Nova-b",
        boxShadow: "unset",
    },
    hover: {
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 4px #f5f5f5",
    },
});

export const CardBtnBuy = styled(Button)(({ theme }) => ({
    backgroundColor: theme.root.backgroundColor,
    boxShadow: theme.root.boxShadow,
    border: theme.root.border,
    borderRadius: theme.root.borderRadius,
    fontFamily: theme.root.fontFamily,
    textTransform: theme.root.textTransform,
    color: theme.root.color,
    padding: theme.root.padding,
    "&:hover": {
      boxShadow: theme.hover.boxShadow,
      color: theme.hover.color,
      backgroundColor: theme.hover.backgroundColor,
    },
  }));

  export const themeCardBtnBuy = createTheme({
    root: {
      backgroundColor: "#FE5F1E",
      boxShadow: "unset",
      borderRadius: "30px",
      fontFamily: "Proxima Nova-b",
      textTransform: "capitalize",
      color: "#FFFFFF",
      padding: "10px 18px",
    },
    hover: {
      boxShadow: "unset",
      backgroundColor: "#FE5F1E",
    },
  });

  export const themeCardBtnBuyToCount = createTheme({
    root: {
      backgroundColor: "#FFFFFF",
      boxShadow: "unset",
      border: "1px solid #FE5F1E",
      borderRadius: "30px",
      fontFamily: "Proxima Nova-b",
      textTransform: "capitalize",
      color: "#FE5F1E",
      padding: "10px 18px",
    },
    hover: {
      boxShadow: "unset",
      color: "#FFFFFF",
      backgroundColor: "#FE5F1E",
    },
  });