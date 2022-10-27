import data from "../data.json";

const initialValue = {
    data: data,
    bookedSeat: [],
  };

const bookingTicketReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "handleBooked":
          // handle select seat
          const newData = state.data.map((item) => {
            const newSeats = item.danhSachGhe.map((seat) => {
              if (seat.soGhe === action.payload) {
                return { ...seat, daDat: !seat.daDat };
              }
              return seat;
            });
            return { ...item, danhSachGhe: newSeats };
          });
          return {
            ...state,
            data: newData,
          };
    
        case "handleBookedIntoCart":
          const danhSachGhe = state.data.map((item) => item.danhSachGhe);
          const seatList = danhSachGhe.reduce((acc, curr) => {
            return [...acc, ...curr];
          }, []);
          const seatBooked = seatList.filter((seat) => seat.daDat === true);
          return { ...state, bookedSeat: seatBooked };
    
        case "resetBookedSeat":
          const newSeatData = state.data.map((item) => {
            const newItem = item.danhSachGhe.map((seat) => {
              return { ...seat, daDat: false };
            });
            return { ...item, danhSachGhe: newItem };
          });
          return { ...state, data: newSeatData };
    
        case "removeSeat":
          const newBookedSeat = state.bookedSeat.filter(
            (seat) => seat.soGhe !== action.payload
          );
          console.log(newBookedSeat);
          return { ...state, bookedSeat: newBookedSeat };
    
        case "removeAllSeat":
          return { ...state, bookedSeat: [] };
    
        default:
          return state;
      }
}

export default bookingTicketReducer