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
        <Grid container >
          <Grid item xs={4.7}>
            <img src={data.image} />
          </Grid>
          <Grid item xs={2}>
            {isShown && (
              <Stack
                direction="row"
               
              >
                <Badge
                  color="primary"
                  badgeContent="X"
                  onClick={() => removeItem(data)}
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
