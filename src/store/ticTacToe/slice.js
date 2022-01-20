import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: Array(9).fill(null),
  timeout: undefined,
  timeLeft: 15,
  player: "X",
  winner: undefined,
};
const changePlayer = (player) => (player === "X" ? "O" : "X");
const checkWinner = (board) => {
  if (board.every((tile) => tile)) {
    return "DRAW";
  }
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
};

export const ticTacToeSlice = createSlice({
  name: "ticTacToe",
  initialState,
  reducers: {
    reduceTime: (state, action) => {
      if (!state.timeLeft) {
        state.winner = changePlayer(state.player);
      } else {
        state.timeLeft -= 1;
      }
    },
    setSquare: (state, action) => {
      if (!state.board[action.payload]) {
        state.board[action.payload] = state.player;
        state.player = changePlayer(state.player);
        state.timeLeft = 15;
      }
    },
    checkForWinner: (state) => {
      state.winner = checkWinner(state.board);
    },
  },
});

// Action creators are generated for each case reducer function
export const { reduceTime, setSquare, checkForWinner } = ticTacToeSlice.actions;

export default ticTacToeSlice.reducer;
