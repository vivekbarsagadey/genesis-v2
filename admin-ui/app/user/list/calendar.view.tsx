import Grid from '@mui/material/Grid';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { IUser } from '../models';
import { ListComponentProps } from './props';

const localizer = momentLocalizer(moment);
interface CalendarEventData {
  title: string;
  start: Date;
  end: Date;
}
function UserCalendarView({ user, myRef }:any) {
  const [events, setEvents] = useState<Array<CalendarEventData>>([]);
  const calendarUser = user?.map((users: IUser) => ({
    title: users.firstName,
    start: new Date(users.createdAt),
    end: new Date(users.createdAt),
  }));
  useEffect(() => {
    setEvents(calendarUser);
  }, []);
  return (
    <Grid pt={1} container height="80vh" ref={myRef}>
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
export default UserCalendarView;
