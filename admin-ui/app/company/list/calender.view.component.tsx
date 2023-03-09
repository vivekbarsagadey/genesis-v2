import React,{useState,useEffect} from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";



const localizer = momentLocalizer(moment);
const CalenderViewComponent = ({items}) => {

  const [events, setEvents] = useState([])

  const AllData = items?.map((item)=>{
    return {'title':item.name,  'start': new Date(item.createdAt),'end': new Date(item.updatedAt)}
  })
  useEffect(()=>{
    setEvents(AllData)
  },[])
  return (
    <>
      <div style={{ height: "73vh" }}>
        <Calendar
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
        />
        </div>

   </>
  )
}

export default CalenderViewComponent