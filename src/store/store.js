import { configureStore } from "@reduxjs/toolkit";
import ticTacToeReducer from "./ticTacToe/slice";

export default configureStore({
  reducer: {
    ticTacToe: ticTacToeReducer,
  },
});
