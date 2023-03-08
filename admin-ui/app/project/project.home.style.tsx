import { colors, weight } from "../../themes";
import { defaultColor } from "../../themes/colors";
import { borderRadius, cursor, fontSize, textTransform } from "../../themes/fonts";

const ProjectHomeStyle = {
  chip: {
    fontSize: fontSize.small,
    marginRight: "0.5rem",
    background: defaultColor.green,
    padding: "0.3rem",
    borderRadius: borderRadius.normal,
  },
  chipcrossbutton: {
    background: colors.black,
    color: colors?.white,
    borderRadius: borderRadius.low,
    padding: "0 0.2rem 0.1rem 3px",
    marginLeft: "0.5rem",
    cursor: cursor.pointer,
  },
  createbtn: {
    textTransform: textTransform.capitalize,
    borderRadius: borderRadius.normal,
    fontWeight: weight.bold,
    height: "4.5vh",
    marginTop: "0.5rem",
  },
  createspan: {
    marginLeft: "0.8rem",
    fontSize: fontSize.medium,
  },
  menubtn: {
    fontSize: "0.8rem",
    color:colors.black,
    textDecoration: "none" as "none",
  },
};

export { ProjectHomeStyle };
