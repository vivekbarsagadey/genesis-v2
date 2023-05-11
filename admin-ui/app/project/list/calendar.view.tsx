import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { ListComponentProps } from './props';
import { IProjects } from '../models';
const localizer = momentLocalizer(moment);

interface CalendarEventData {
  title: string;
  start: Date;
  end: Date;
}

function ProjectsCalendarView({ projects }: ListComponentProps) {
  const [events, setEvents] = useState<Array<CalendarEventData>>([]);

  const calendarCompanies = projects.map((project: IProjects) => ({
    title: project.name,
    start: new Date(project.createdAt),
    end: new Date(project.createdAt),
  }));
  useEffect(() => {
    setEvents(calendarCompanies);
  }, []);
  return (
    <Grid pt={1} container height="80vh">
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
}

export default ProjectsCalendarView;
