import { Grid } from "@mui/material";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import React from "react";
import Draggable from "react-draggable";

const DragComponent = ({ data, setChildData, childData }) => {
  const [isShown, setIsShown] = React.useState(false);
  const removeItem = (dataR) => {
    setChildData(childData.filter((ele) => ele.type !== dataR.type));
  };

  return (
    <Draggable>
      <Grid
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
      </Grid>
    </Draggable>
  );
};

export default DragComponent;
