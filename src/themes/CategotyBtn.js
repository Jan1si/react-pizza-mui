import { Button, createTheme, styled } from '@mui/material';

export const CategoryBtn = styled(Button)(({ theme }) => ({
    color: theme.root.color,
    height: theme.root.height,
    fontFamily: theme.root.fontFamily,
    textTransform: theme.root.textTransform,
    backgroundColor: theme.root.backgroundColor,
    borderRadius: theme.root.borderRadius,
    boxShadow:theme.root.boxShadow,
    '&:hover': {
      color: theme.hover.color,
      backgroundColor: theme.hover.backgroundColor,
    }
  }));

  export const themeCategoryBtn = createTheme({
    root: {
      color: '#2C2C2C',
      height: '35px',
      fontFamily: 'Proxima Nova-b',
      textTransform: 'capitalize',
      backgroundColor: '#F9F9F9',
      borderRadius: '30px',
      boxShadow: "unset",
    },
    hover: {
      backgroundColor: '#282828',
      color: 'white',
    }
  });