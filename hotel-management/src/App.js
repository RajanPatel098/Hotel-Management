import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BookingList from './BookingList';
import './App.css' 

function App() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className="App">
      <h1>Hotel Booking Tracker</h1>
      <BookingForm onAdd={addBooking} />
      <BookingList bookings={bookings} />
    </div>
  );
}

export default App;
