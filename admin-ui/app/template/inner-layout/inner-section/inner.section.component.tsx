import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import RemoveDrag from "./remove.drag";

const InnerSectionComponent = ({
  value,
  TabPanel,
  dragList,
  screens,
  setDragList,
}) => {
  const removeItemDrag = (dataR) => {
    setDragList(dragList.filter((ele) => ele.lable !== dataR.lable));
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        {screens?.map((s) => {
          return (
            <TabPanel value={value} index={0} key={s.id}>
              <Typography color={"white"}>
                {dragList?.map((data) => {
                  return (
                    <div key={data.id}>
                      <RemoveDrag
                        data={data}
                        dragList={dragList}
                        removeItemDrag={removeItemDrag}
                      />
                    </div>
                  );
                })}
              </Typography>
            </TabPanel>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default InnerSectionComponent;
