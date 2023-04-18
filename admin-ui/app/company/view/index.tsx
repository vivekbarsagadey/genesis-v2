import React from "react";
import { IconButton, Tooltip } from '@mui/material';
import GridViewIcon from "@mui/icons-material/GridView";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TimelineIcon from "@mui/icons-material/Timeline";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { title } from "process";

interface IViewProps {
    handleCount: () => void
}

const AllViews =[
    { id:1,
     view: "Grid", 
     icon:(
      <Tooltip title="Grid">
     <GridViewIcon />
     </Tooltip>
     )
    }, 
    { 
      id:2, 
      view: "List", 
      icon:(
        <Tooltip title="List">
      <ListAltIcon />
      </Tooltip>
      )
    },
    { 
      id:3, 
      view: "Graph", 
      icon:(
        <Tooltip title="Graph">
        <TimelineIcon />
        </Tooltip>
        ) 
    }, 
    { 
      id:4, 
      view: "Calender", 
      icon:(
        <Tooltip title="Calender">
        <CalendarMonthIcon />
        </Tooltip>
        ) 
    } 
]
const ViewsComponent = ({handleCount }: IViewProps) => {

  return (
    <>
    {AllViews?.map((item)=>{
        return(
            <>
            <IconButton onClick={()=>handleCount(item.view)} >
             {item.icon}
           </IconButton>
      </>
        )
    })}
    </>
  );
};

export default ViewsComponent;
