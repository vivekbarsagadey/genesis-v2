import Grid from "@mui/material/Grid";
import moment from "moment";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { IRole } from "../models";
import { ListComponentProps } from "./props";
const localizer = momentLocalizer(moment);

interface CalendarEventData {
  title: string;
  start: Date;
  end: Date;
}

const RoleCalendarView = ({ roles }: ListComponentProps) => {
  const [events, setEvents] = useState<Array<CalendarEventData>>([]);

  const calendarRoles = roles.map((roles : IRole) => {
    return {
      title: roles.name,
      start: new Date(roles.createdAt),
      end: new Date(roles.createdAt),
    }
  });
  useEffect(() => {
    setEvents(calendarRoles);
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

export default RoleCalendarView;
