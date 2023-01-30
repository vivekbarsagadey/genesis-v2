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
      width:'80%',
      marginLeft:'3px' 
      
    },
    container: {
      padding: "0px",
      border: "1px solid",
      borderRadius: "4px",
      height: "6.5vh",
      width:'18%',
      display: "flex",
      alignContent: "center",
      background:'#fff',
      alignItems:'center'
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

};

export { InputStyle };
