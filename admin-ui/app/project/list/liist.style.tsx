import { defaultColor } from "../../../themes/colors";
import { textAlign, weight } from "../../../themes/fonts";

const ListStyle = {
  container: {
    textAlign: textAlign.center,
    backgroundColor: defaultColor.green,
    paddingLeft: "0.5rem",
    width: "100%",

  },
  typography: {
    color: defaultColor.yellow,
    fontWeight: weight.semi,
    fontSize: "0.75rem",
  },
  pagination: {
    display: "flex" as "flex",
    justifyContent: "flex-end" as "flex-end",
    marginTop: "2rem",
    position: "relative" as "relative",
  },
  paginationheader: {
    height: "71.5vh",
  },
  grid: {
    display: "flex" as "flex",
    alignItems: textAlign.alignItems,
  },
  loader: {
    width: "100%",
    marginTop: "-1.7rem",
  },
  gridfontsize: {
    fontSize: "0.75rem",
  },
  box: {
    padding: "0.8rem",
  },
  card: {
    paddingLeft: "1rem",
  },
};
export { ListStyle };
