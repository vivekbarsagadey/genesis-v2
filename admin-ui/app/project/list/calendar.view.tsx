import React, { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Grid from "@mui/material/Grid";
const localizer = momentLocalizer(moment);


const ProjectCalendarView = ({ projectData }: any) => {
  const [events, setEvents] = useState([]);

  const CalendarData = projectData.map((projectData: any) => {
    return {
      title: projectData.firstName,
      start: new Date(projectData.createdAt),
      end: new Date(projectData.updatedAt),
    };
  });
  useEffect(() => {
    setEvents(CalendarData);
  }, []);
  return (
    <Grid pt={1} container height={"80vh"}>
      <Grid item xs={12} px={2.5}>
        <Calendar
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
        />
      </Grid>
    </Grid>
  );
};

export default ProjectCalendarView;
