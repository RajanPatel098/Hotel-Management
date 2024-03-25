import React from 'react';

function BookingList({ bookings, onRemove }) {
    return (
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking.guestName} - {booking.hotelName}, Arriving: {booking.arrivalDate}, Departing: {booking.departureDate}
            <button onClick={() => onRemove(index)} style={{marginLeft: '10px'}}>Remove</button>
          </li>
        ))}
      </ul>
    );
  }

export default BookingList;
