import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // default style
// import './Calendar.css'; // optional custom styles

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">📅 Calendar</h2>

      <Calendar
        onChange={setDate}
        value={date}
        className="w-full"
      />

      <p className="mt-4 text-center text-gray-600">
        Selected date: <strong>{date.toDateString()}</strong>
      </p>
    </div>
  );
};

export default CalendarPage;
