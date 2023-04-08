import { Typography } from "@mui/material";

const BuilderSideBarInnerText = ({ item }) => {
  return (
    <Typography
      color={"#334D6E"}
      style={{ cursor: "pointer", marginLeft: "1.5rem", fontSize: "0.8rem" }}
    >
      {item.label}
    </Typography>
  );
};

export default BuilderSideBarInnerText;
