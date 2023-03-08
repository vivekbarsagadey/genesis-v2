import { colors, fontSize, weight } from "../../themes";
import { position, textAlign } from "../../themes/fonts";

const CompanyStyle = {
  errormessage: {
    marginTop: "0",
    color: colors.danger,
    fontWeight: weight.low,
  },
  fontSize: {
    fontWeight: weight.bold,
  },
  btn: {
    background: colors.defaultcolor,
  },
  stack: {
    padding: "1rem",
  },
  filterbtn: {
    textTransform: "capitalize" as "capitalize",
  },
  card: {
    padding: "0px  !important ",
  },
  infoGrid: {
    display: "flex",
    justifyContent: textAlign.textAlign,
    alignItems: textAlign.textAlign,
  },
  expandIcon: {
    display: "flex" as "flex",
    textAlign: textAlign.textAlign,
    alignItems: textAlign.textAlign,
  },
  listfont: {
    fontSize: fontSize.small,
    fontWeight: weight.bold,
  },
  pagination: {
    display: "flex" as "flex",
    justifyContent: "flex-end",
    position: position.relative,
  },
  search: {
    width: "100%",
  },
  box: {
    display: "flex" as "flex",
    alignItems: textAlign.alignItems,
  },
  loading: {
    width: "100%",
    marginTop: "-1.5rem",
  },
};

export { CompanyStyle };
