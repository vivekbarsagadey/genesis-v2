import { colors } from "../../../../themes";
import { defaultColor } from "../../../../themes/colors";
import { textTransform } from "../../../../themes/fonts";

const InnerHeaderStyle = {
  container: {
    backgroundColor: defaultColor.green,
    height: "2.9rem",
    marginTop: "0.5rem",
  },
  tabs: {
    textTransform: textTransform.capitalize,
    fontSize: "0.7rem",
    color: colors.white,
    paddingTop: "0px",
    display: "flex",
    paddingBottom: "0.5rem",
    alignItems: "flex-end" as "flex-end",
  },
  btn: {
    textTransform: textTransform.capitalize,
    height: "1.5rem",
  },
};

export { InnerHeaderStyle };
