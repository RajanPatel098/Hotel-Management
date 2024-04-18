import React, { useState } from 'react';

function BookingForm({ onAdd }) {
  const [guestName, setGuestName] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ guestName, hotelName, arrivalDate, departureDate, duration, price });
    setGuestName('');
    setHotelName('');
    setArrivalDate('');
    setDepartureDate('');
    setDuration('');
    setPrice('');
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
      <select value={duration} onChange={(e) => setDuration(e.target.value)} required>
        <option value="">Select Duration</option>
        <option value="2 hours">2 hours</option>
        <option value="4 hours">4 hours</option>
        <option value="1 day">1 day</option>
      </select>
      <select value={price} onChange={(e) => setPrice(e.target.value)} required>
        <option value="">Select Price</option>
        <option value="$40">$40</option>
        <option value="$60">$60</option>
        <option value="$90">$90</option>
      </select>
      <button type="submit">Add Booking</button>
    </form>
  );
}

export default BookingForm;
