import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import "../scss/SeatList.scss";

const SeatList = () => {
  const { data } = useSelector((state) => state.bookTicket);
  const dispatch = useDispatch();

  const handleSelect = (seatName) => {
    dispatch({ type: "handleBooked", payload: seatName });
    dispatch({ type: "handleBookedIntoCart" });
  };
  return (
    <div className="list-container">
      {data.map((item) => (
        <div key={item.hang} className="row-list">
          <p className="row">{item.hang}</p>
          {item.danhSachGhe.map((seat) => (
            <button
              key={seat.soGhe}
              className={`seat-item ${seat.daDat ? "booked" : ""}`}
              onClick={() => handleSelect(seat.soGhe)}
            >
              {seat.soGhe}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SeatList