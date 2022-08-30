import { combineReducers, createStore } from "redux";
import { bookingTicketReducer } from "./reducer/bookingTicketReducer";

const rootReducer = combineReducers({
  bookingTicketReducer: bookingTicketReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
