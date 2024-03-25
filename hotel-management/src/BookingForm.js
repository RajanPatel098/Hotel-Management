import React, { useState } from 'react';

function BookingForm({ onAdd }) {
  const [guestName, setGuestName] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ guestName, hotelName, arrivalDate, departureDate });
    setGuestName('');
    setHotelName('');
    setArrivalDate('');
    setDepartureDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        placeholder="Guest Name"
        required
      />
      <input
        type="text"
        value={hotelName}
        onChange={(e) => setHotelName(e.target.value)}
        placeholder="Hotel Name"
        required
      />
      <input
        type="date"
        value={arrivalDate}
        onChange={(e) => setArrivalDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
        required
      />
      <button type="submit">Add Booking</button>
    </form>
  );
}

export default BookingForm;
