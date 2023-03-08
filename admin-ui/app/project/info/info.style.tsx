import { defaultColor } from "../../../themes/colors";
import { textAlign } from "../../../themes/fonts";

const InfoStyle = {
    container: {
        display: "flex" as "flex",
        alignItems: textAlign.center,
        background: defaultColor.red,
        padding: "0.2rem",
        width:'100%',
        marginTop:'0.2rem'
      },
      typography: {
        color: defaultColor.yellow,
        fontSize: "0.73rem",
      },
  };
  
  export { InfoStyle };
  