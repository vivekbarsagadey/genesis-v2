import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Draggable from "react-draggable";

const RemoveDrag = ({ data, removeItemDrag, dragList }: any) => {
  const [isShown, setIsShown] = React.useState(false);
  const removeItem = (dataR: any) => {
    removeItemDrag(dataR);
  };

  return (
    <Draggable>
      <Box
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <Grid container style={{ position: "relative" }}>
          <Grid item xs={4.7}>
            <img src={data.image} />
          </Grid>
          <Grid item xs={2}>
            {isShown && (
              <Stack
                direction="row"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              >
                <Badge
                  color="primary"
                  badgeContent="X"
                  onClick={() => removeItem(data)}
                  style={{ cursor: "pointer" }}
                ></Badge>
              </Stack>
            )}
          </Grid>
        </Grid>
      </Box>
    </Draggable>
  );
};

export default RemoveDrag;
