"use client";
import { colors, fontSize, weight } from "../../themes";

const InputStyle = {
  label: {
    item: {
      fontSize: fontSize.small,
      weight: weight.low,
    },
    container: {
      fontSize: fontSize.small,
      weight: weight.low,
    },
  },
  input: {
    item: {
      border: "none",
      outline: "none",
      width: "80%",
      marginLeft: "3px",
    },
    container: {
      padding: "0px",
      border: "1px solid",
      borderRadius: "4px",
      height: "6.5vh",
      width: "18%",
      display: "flex",
      alignContent: "center",
      background: "#fff",
      alignItems: "center",
    },
  },

  error: {
    item: {
      color: colors.danger,
      margin: "2px",
      fontSize: "13px",
      fontWeight: "bold",
    },
    container: {
      color: colors.danger,
      margin: "2px",
      fontSize: "12px",
      fontWeight: "bold",
    },
  },

  inputVariantOne: {
    item: {
      backgroundColor: "#D1D3D9",
      outline:'none'
    },
  },
  inputVariantTwo: {
    item: {
      backgroundColor: "#D1D3D9",
      borderBottom:"3px solid black",
    },
  },
  inputVariantThree: {
    item: {
      backgroundColor: "#C3ACD0",
      border: "2px solid #674188",
    },
  },
  inputVariantFour: {
    item: {
      backgroundColor: "#fff",
      borderBottom:"3px solid black"
    },
  },
  inputVariantFive: {
    item: {
      backgroundColor: "#fffff",
      borderBottom:"3px solid #FFB100"
    },
  },
};

export { InputStyle };
