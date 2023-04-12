import { CardContent } from "@material-ui/core";
import { Typography } from "@mui/material";

const SideBarInnerText = ({ ele }) => {
  return (
    <CardContent>
      <Typography
        fontSize={"0.8rem"}
        color={"#334D6E"}
        style={{ cursor: "pointer", marginLeft: "0.8rem", marginTop: "-2rem" }}
      >
        {ele.label}
      </Typography>
    </CardContent>
  );
};

export default SideBarInnerText;
