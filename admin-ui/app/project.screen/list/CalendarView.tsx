import React, { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Grid from "@mui/material/Grid";
const localizer = momentLocalizer(moment);
const TestingCalendarView = ({ project }: any) => {
  const [events, setEvents] = useState([]);

  const AllData = project.map((project: any) => {
    return {
      title: project.firstName,
      start: new Date(project.createdAt),
      end: new Date(project.updatedAt),
    };
  });
  useEffect(() => {
    setEvents(AllData);
  }, []);
  return (
    <Grid pt={1} container style={{ height: "73vh" }}>
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

export default TestingCalendarView;
