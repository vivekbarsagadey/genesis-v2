import { Typography } from "@mui/material";

const BuilderSideBarInnerText = ({ item }) => {
  return (
    <Typography
      fontSize={"0.8rem"}
      color={"#334D6E"}
      style={{ cursor: "pointer", marginLeft: "1.5rem" }}
    >
      {item.label}
    </Typography>
  );
};

export default BuilderSideBarInnerText;
