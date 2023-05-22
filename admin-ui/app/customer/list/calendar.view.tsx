<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ListComponentProps } from './props';
import { ICustomer } from '../models';

=======
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ListComponentProps } from "./props";
import { ICustomer } from "../models";
>>>>>>> dev
const localizer = momentLocalizer(moment);

interface CalendarEventData {
  title: string;
  start: Date;
  end: Date;
}

<<<<<<< HEAD
function CustomerCalendarView({ customer }: ListComponentProps) {
  const [events, setEvents] = useState<Array<CalendarEventData>>([]);

  const calendarCustomer = customer?.map((customers: ICustomer) => ({
    title: customers.firstName,
    start: new Date(customers.createdAt),
    end: new Date(customers.createdAt),
  }));
=======
const CustomerCalendarView = ({ customer }: ListComponentProps) => {
  const [events, setEvents] = useState([]);

  const calendarCustomer = customer?.map((customers : ICustomer) => {
    return {
      title: customers.name,
      start: new Date(customers.createdAt),
      end: new Date(customers.updatedAt),
    }
  });
>>>>>>> dev
  useEffect(() => {
    setEvents(calendarCustomer);
  }, []);
  return (
<<<<<<< HEAD
    <Grid pt={1} container height="80vh">
=======
    <Grid pt={1} container height={"80vh"}>
>>>>>>> dev
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
<<<<<<< HEAD
}
=======
};
>>>>>>> dev

export default CustomerCalendarView;
