import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ToggleButton from "./ToggleButton";

export function Calendar() {
  const [country, setCountry] = useState('');
  
  const [year, setYear] = useState('');
  const [publicHoliday, setPublicHoliday] = useState([]);
  const eventHoliday = [];
  let today = new Date().getFullYear();
  
  const Footer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0.5em 0;
    font-size: 0.875em;

    @media (max-width: 768px) {
      font-size: 0.5em
    }
  `;

  useEffect(() => {
    
    getGeoInfo();
    getPublicHoliday();
  },[year,country]);

  const getGeoInfo = () => {
    axios.get('https://ipapi.co/json/').then((response) => {
      let data = response.data;
      setCountry(data.country);
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  const getPublicHoliday = () => {
    axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`).then((response) => {
      let data = response.data;
      setPublicHoliday(data);
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }
  const setEvent = () => {
    publicHoliday.forEach(holiday => {
        eventHoliday.push({ 
          title: holiday.localName, 
          start: holiday.date, 
          end: holiday.date, 
        });
    });
    return eventHoliday;
  }
  
    return (
      <>
        <ToggleButton/>
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={setEvent()}
            initialView="dayGridMonth"
            height= "45em"
            eventBackgroundColor='#ff0000'
            headerToolbar={
            {start: 'title',
            end: 'prev,next' }
            }
            datesSet={(dateInfo) => {
              const start = new Date(dateInfo.startStr);
              const end = new Date(dateInfo.endStr);
              let monthEnd = end.getUTCMonth();
              let yearStart = start.getUTCFullYear();
              let yearEnd = end.getUTCFullYear();
              if (monthEnd !== 1){
                setYear(yearStart);
              }else{
                setYear(yearEnd);
              }
            }}
        />
        <Footer>
          @ {country} - {today}
        </Footer>
      </>
    );
  }
  
  export default Calendar;
