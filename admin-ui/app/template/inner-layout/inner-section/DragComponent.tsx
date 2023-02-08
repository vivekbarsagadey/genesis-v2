import React from "react";
import Draggable from "react-draggable";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { Typography, Grid } from "@mui/material";

const DragComponent = ({ data, setChildData, childData }: any) => {
  const [isShown, setIsShown] = React.useState(false);
  const removeItem = (dataR: any) => {
    setChildData(childData.filter((ele: any) => ele.type !== dataR.type));
  };

  return (
    <Draggable>
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <Grid container>
          <Grid item xs={4.7}>
            {/* <img src={data.path} /> */}
          </Grid>
          <Grid item xs={2}>
            {isShown && (
              <Stack direction="row">
                <Badge color="primary" badgeContent="X"></Badge>
              </Stack>
            )}
          </Grid>
        </Grid>
      </div>
    </Draggable>
  );
};

export default DragComponent;
