import React, { useState } from "react";
import { Typography } from "@mui/material";

const SideBarInnerText = ({ item, updateMyDragImages }: any) => {
  const updateList = (itemR: any) => {
    updateMyDragImages(itemR);
  };
  return (
    <Typography
      fontSize={"0.8rem"}
      color={"#334D6E"}
      style={{ cursor: "pointer",marginLeft:'1.5rem' }}
      onClick={() => updateList(item)}
    >
      {item.lable}
    </Typography>
  );
};

export default SideBarInnerText;
