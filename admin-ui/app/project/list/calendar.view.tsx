import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ListComponentProps } from "./props";
import IProject from "../project.model";

const localizer = momentLocalizer(moment);

interface CalendarEventData {
  title: string;
  start: Date;
  end: Date;
}

const ProjectCalendarView = ({ projects}: ListComponentProps) => {
  const [events, setEvents] = useState([]);

  const calendarProjects = projects?.map((projects : IProject) => {
    return {
      title: projects.name,
      start: new Date(projects.createdAt),
      end: new Date(projects.updatedAt),
    }
  });
  useEffect(() => {
    setEvents(calendarProjects);
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
