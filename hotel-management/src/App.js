import React, { useState } from 'react';
import './App.css';
import BookingForm from './BookingForm';
import BookingList from './BookingList';

function App() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  const removeBooking = (index) => {
    setBookings(currentBookings => currentBookings.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Hotel Booking Tracker</h1>
      <BookingForm onAdd={addBooking} />
      <BookingList bookings={bookings} onRemove={removeBooking} />
    </div>
  );
}

export default App;
