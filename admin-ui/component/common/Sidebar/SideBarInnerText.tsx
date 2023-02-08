import React, { useState } from "react";
import { Typography } from "@mui/material";

const SideBarInnerText = ({ item, updateMyDragImages }: any) => {
  const updateList = (itemR: any) => {
    updateMyDragImages(itemR);
  };
  return (
    <Typography
      textAlign={"left"}
      fontSize={"0.8rem"}
      color={"#334D6E"}
      style={{ cursor: "pointer" }}
      onClick={() => updateList(item)}
    >
      {item.lable}
    </Typography>
  );
};

export default SideBarInnerText;
