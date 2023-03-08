import { textAlign, textTransform, weight } from "../../../themes/fonts";

const CreateStyle = {
  paper: {
    padding: "3rem",
    height: "92.6vh",
  },
  container: {
    width: "100%",
    alignItems: textAlign.alignItems,
    marginTop: "2rem",
  },
  btn: {
    textTransform: textTransform.capitalize,
    fontWeight: weight.bold,
  },
};

export { CreateStyle };
