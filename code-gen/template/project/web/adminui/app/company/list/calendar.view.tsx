{% set Info_Cap = app_list['name'].capitalize() -%}
{% set Info_Sm = app_list['name'] -%}

import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { I{{Info_Cap}} } from '../models/{{Info_Sm}}.model';
import { ListComponentProps } from './props';

const localizer = momentLocalizer(moment);

interface CalendarEventData {
  title: string;
  start: Date;
  end: Date;
}

function {{Info_Cap}}CalendarView({ {{Info_Sm}} }: ListComponentProps) {
  const [events, setEvents] = useState<Array<CalendarEventData>>([]);

  const calendar{{Info_Cap}} = {{Info_Sm}}.map(({{Info_Sm}}: I{{Info_Cap}}) => ({
    title: {{Info_Sm}}.name,
    start: new Date({{Info_Sm}}.createdAt),
    end: new Date({{Info_Sm}}.createdAt),
  }));
  useEffect(() => {
    setEvents(calendar{{Info_Cap}});
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

export default {{Info_Cap}}CalendarView;
