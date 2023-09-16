// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter-slice";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { ...state, counter: state.counter + 1 };
//   }
//   if (action.type === "increase") {
//     return { ...state, counter: state.counter + action.amount };
//   }
//   if (action.type === "decrement") {
//     return { ...state, counter: state.counter - 1 };
//   }
//   if (action.type === "toggleCounter") {
//     return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };

// const store = createStore(counterReducer); // providing reducer to store, but not useful when we have multiple slice. (then we have to combine all slice here)

const store = configureStore({ reducer: { counter: counterSliceReducer } }); // reducer key will take object, which is containing all the reducers slice, key of that object can be any name.

export default store;
