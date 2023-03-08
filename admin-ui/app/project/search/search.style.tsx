import { colors } from "../../../themes"
import { textAlign } from "../../../themes/fonts"

const SearchStyle={
    search: {
        border: "none",
        height: "4vh",
        width: "100%",
        outline: "none",
      },
      box: {
        backgroundColor: colors.white,
        display: "flex",
        alignItems: textAlign.center,
        border: "1px solid #cbd5e1",
        borderRadius: "5px",
        height: "6vh",
      },
}
export{SearchStyle}