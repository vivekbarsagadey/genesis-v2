import { colors } from "../../themes";
import {
  absolute,
  backgroundSize,
  position,
  textAlign,
  textTransform,
} from "../../themes/fonts";

const LoginStyle = {
  grid: {
    position: absolute.absolute,
    top: "5%",
  },
  login_button: {
    width: "100%",
    color: colors.white,
    textTransform: textTransform.textTransform,
  },
  background_style: {
    backgroundImage: `url(${"./images/loginbackground1.png"})`,
    position: position.relative,
    backgroundRepeat: "no-repeat" as "no-repeat",
    backgroundSize: backgroundSize.cover,
    height: "100vh",
    backgroundPosition: textAlign.center,
  },
  card_style: {
    padding: "1.5rem",
    width: "20rem",
    marginTop: "1rem",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "5px",
  },
};
export { LoginStyle };
