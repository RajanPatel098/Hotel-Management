import React from 'react';

function BookingList({ bookings }) {
  return (
    <ul>
      {bookings.map((booking, index) => (
        <li key={index}>
          {booking.guestName} - {booking.hotelName}, Arriving: {booking.arrivalDate}, Departing: {booking.departureDate}
        </li>
      ))}
    </ul>
  );
}

export default BookingList;
