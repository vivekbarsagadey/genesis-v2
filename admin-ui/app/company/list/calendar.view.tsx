import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {ICompany} from "../models/company.model";
import { ListComponentProps } from "./props";
const localizer = momentLocalizer(moment);

interface CalendarEventData {
  title: string;
  start: Date;
  end: Date;
}

const CompanyCalendarView = ({ companies }: ListComponentProps) => {
  const [events, setEvents] = useState<Array<CalendarEventData>>([]);

  const calendarCompanies = companies.map((company : ICompany) => {
    return {
      title: company.name,
      start: new Date(company.createdAt),
      end: new Date(company.updatedAt),
    }
  });
  useEffect(() => {
    setEvents(calendarCompanies);
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

export default CompanyCalendarView;
