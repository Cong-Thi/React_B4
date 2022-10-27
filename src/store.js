import { configureStore } from "@reduxjs/toolkit";
import bookingTicketReducer from "./reducers/bookingTicketReducer";
const store = configureStore({
  reducer: {
    bookTicket: bookingTicketReducer,
  },
});

export default store;