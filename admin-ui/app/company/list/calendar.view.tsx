import React, { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Grid from "@mui/material/Grid";
import ICompany from "../company.model";
const localizer = momentLocalizer(moment);

interface CompanyComponentProps {
  copyCompanyData: Array<ICompany>;
}

const CompanyCalendarView = ({ copyCompanyData }: CompanyComponentProps) => {
  const [events, setEvents] = useState([]);

  const CalendarData = copyCompanyData?.map((copyCompanyData) => {
    return {
      title: copyCompanyData.firstName,
      start: new Date(copyCompanyData.createdAt),
      end: new Date(copyCompanyData.updatedAt),
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

export default CompanyCalendarView;
