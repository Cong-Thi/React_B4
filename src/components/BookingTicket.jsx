import React from 'react'
import BookingDetail from "./BookingDetail";
import Seat from './Seat'
import "../scss/TiketBooking.scss";

const BookingTicket = () => {
  return (
    <div className="wrapper">
      <h1 className="title">BOOK TICKETS</h1>
      <div className="container">
        <div className="seat">
          <Seat/>
        </div>

        <div className="detail">
          <BookingDetail />
        </div>
      </div>
    </div>
  )
}

export default BookingTicket