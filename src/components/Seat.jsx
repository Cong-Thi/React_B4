import React from 'react'
import "../scss/Seat.scss";
import SeatList from "./SeatList";

const Seat = () => {
  return (
    <div className="seat-container">
      <h2>Màn Hình</h2>
      <div className="seat-list">
        <SeatList />
      </div>
    </div>
  )
}

export default Seat