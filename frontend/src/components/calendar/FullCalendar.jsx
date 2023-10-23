import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Grid } from '@mui/material';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './calendar.scss';

moment.locale("en-US");
const localizer = momentLocalizer(moment);

export default function FullCalendar() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    // Load events from local storage when the component mounts
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents) {
      setEventsData(storedEvents);
    }
  }, []);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      const newEvent = {
        start,
        end,
        title,
      };
      const updatedEvents = [...eventsData, newEvent];
      setEventsData(updatedEvents);

      // Save events to local storage
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    }
  };

  return (
    <div className='flex w-full '>
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0"></div>
      <div className="grid w-full m-20">
        <div>
          <Calendar
            views={["day", "agenda", "month"]}
            selectable
            localizer={localizer}
            defaultView="month"
            events={eventsData}
            style={{ height: "75vh", color: "#FFFFFF" }}
            onSelectEvent={(arr) => alert(arr.title)}
            onSelectSlot={handleSelect}
            className="custom-calendar"
          />
        </div>
      </div>
    </div>
  );
}
