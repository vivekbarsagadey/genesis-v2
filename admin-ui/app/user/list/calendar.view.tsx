import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Grid from "@mui/material/Grid";
const localizer = momentLocalizer(moment);

const CalendarView = ({ items }) => {
  const [events, setEvents] = useState([]);

  const AllData = items?.map((items) => {
    return {
      title: items.firstName,
      start: new Date(items.createdAt),
      end: new Date(items.updatedAt),
    };
  });
  useEffect(() => {
    setEvents(AllData);
  }, []);
  return (
    <Grid pt={1} container>
      <Grid item xs={12}>
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

export default CalendarView;
