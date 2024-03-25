import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import BookingForm from './BookingForm';
import BookingList from './BookingList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  const removeBooking = (index) => {
    setBookings(currentBookings => currentBookings.filter((_, i) => i !== index));
  };

  const handleLogin = (username, password) => {
    setIsLoggedIn(true);
    setUser(username);
  };

  const handleSignup = (username, password) => {
    setIsLoggedIn(true);
    setUser(username);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUser("");
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div className="banner">
          Welcome, {user}! <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <h1>Hotel Booking Tracker</h1>
      )}

      {!isLoggedIn ? (
        <>
          <Login onLogin={handleLogin} />
          <Signup onSignup={handleSignup} />
        </>
      ) : (
        <>
          <BookingForm onAdd={addBooking} />
          <BookingList bookings={bookings} onRemove={removeBooking} />
        </>
      )}
    </div>
  );
}

export default App;
