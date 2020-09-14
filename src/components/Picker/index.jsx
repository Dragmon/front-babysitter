import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useServer } from '../Contex/Server';
import '../../sass/calendar.scss';

const Picker = () => {
  const { onChange, date } = useServer();

  return (
    <div className='calendar'>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default Picker;
