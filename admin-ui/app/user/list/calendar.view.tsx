import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ListComponentProps } from "./props";
import { IUser } from "../models";
const localizer = momentLocalizer(moment);
interface CalendarEventData {
  title: string;
  start: Date;
  end: Date;
}
const UserCalendarView = ({ user }: ListComponentProps) => {
  const [events, setEvents] = useState([]);
  const calendarUser = user?.map((users: IUser) => {
    return {
      title: users.firstName,
      start: new Date(users.createdAt),
      end: new Date(users.updatedAt),
    };
  });
  useEffect(() => {
    setEvents(calendarUser);
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
export default UserCalendarView;
