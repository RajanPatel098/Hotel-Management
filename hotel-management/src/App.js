import React, { useState } from 'react';
import './App.css';
import BookingForm from './BookingForm';
import BookingList from './BookingList';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  const removeBooking = (index) => {
    setBookings(currentBookings => currentBookings.filter((_, i) => i !== index));
  };
  
  const handleLogin = (username, password) => {
    // Here, you'd typically verify the username and password against a backend.
    // For simplicity, we'll just set isLoggedIn to true.
    setIsLoggedIn(true);
  };

  const handleSignup = (username, password) => {
    // Similar to login, you'd create a new user in your backend.
    // This is just a placeholder to demonstrate functionality.
    setIsLoggedIn(true);
  };


  return (
    <div className="App">
      <h1>Hotel Booking Tracker</h1>
      {!isLoggedIn ? (
        <>
          <Login onLogin={handleLogin} />
          <Signup onSignup={handleSignup} />
        </>
      ) : (
        <>
          <BookingForm onAdd={addBooking} />
          <BookingList bookings={bookings} />
        </>
      )}
    </div>
  );
}

export default App;
