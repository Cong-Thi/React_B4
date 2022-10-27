import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ImBin } from "react-icons/im";
import "../scss/BookingDetail.scss";


const BookingDetail = () => {
  const { bookedSeat } = useSelector((state) => state.bookTicket);
  const dispatch = useDispatch();

  const handleRemoveSeat = (seatName) => {
    dispatch({ type: "removeSeat", payload: seatName });
    dispatch({ type: "handleBooked", payload: seatName });
  };

  const handleDeleteAllSeat = () => {
    dispatch({ type: "resetBookedSeat" });
    dispatch({ type: "removeAllSeat" });
  };

  const handleClickBookSeat = () => {
    alert("Đặt vé thành công!");
    dispatch({ type: "resetBookedSeat" });
    dispatch({ type: "removeAllSeat" });
  };
  return (
    <div className="detail-container">
      <h2>DANH SÁCH GHẾ ĐÃ CHỌN</h2>
      <div className="detail-table">
        <table width="100%">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Huỷ</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {bookedSeat?.map((seat) => (
              <tr key={seat.soGhe}>
                <td>{seat.soGhe}</td>
                <td>{seat.gia.toLocaleString()}</td>
                <td>
                  <button
                    className="cancel-btn"
                    onClick={() => handleRemoveSeat(seat.soGhe)}
                  >
                    <ImBin size="16px" color="#fff" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {bookedSeat.length > 0 && (
        <div className="booking-footer">
          <div className="total">
            <h4>Tổng tiền:</h4>
            <p>
              {bookedSeat
                .reduce((acc, curr) => acc + curr.gia, 0)
                .toLocaleString()}
            </p>
          </div>
          <div className="footer-btn">
            <button className="btn btn-danger" onClick={handleDeleteAllSeat}>
              XOÁ
            </button>
            <button className="btn btn-success" onClick={handleClickBookSeat}>
              ĐẶT VÉ
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookingDetail