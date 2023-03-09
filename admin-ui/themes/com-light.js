"use client";
import { yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
      textDecoration:'none',
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 600,
      color: "#1e293b",
      marginTop:'0.6rem'
    },
    body1: {
      fontWeight: 500,
      fontSize: "0.9rem",
    },
    body2: {
      fontSize: "0.75rem",
      marginTop: "0.7rem",
    },
    button: {
      textTransform: "capitalize",
    },
  },
  paper:{
    backgroundColor:yellow [300]
  }
  
});
