import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import RemoveDrag from "./RemoveDrag";
interface ITabSubPanel {
  value: number;
  TabPanel: any;
  a11yProps: any;
  screens: any;
  dragList: any;
  setDragList: any;
}
const InnerSectionComponent = ({
  value,
  TabPanel,
  dragList,
  screens,
  setDragList,
}: ITabSubPanel) => {
  const removeItemDrag = (dataR: any) => {
    setDragList(dragList.filter((ele: any) => ele.lable !== dataR.lable));
  };
  return (
    <Grid container>
      <Grid item xs={12} style={{ background: "#4D575F", height: "84.3vh" }}>
        {screens?.map((s: any) => {
          return (
            <TabPanel value={value} index={0} key={s.id}>
              <Typography color={"white"} fontSize={"1.5rem"}>
                {dragList.map((data: any) => {
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
