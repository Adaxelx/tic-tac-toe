import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { reduceTime, checkForWinner } from "store/ticTacToe/slice";

const InfoWrapper = styled.div`
  display: flex;
`;

const Info = () => {
  const ticTacToe = useSelector((state) => state.ticTacToe);
  const dispatch = useDispatch();
  const { timeLeft, player, winner } = ticTacToe;

  useEffect(() => {
    dispatch(checkForWinner());
  }, [dispatch, ticTacToe.board]);

  useEffect(() => {
    const interval = setInterval(() => {
      winner && clearInterval(interval);
      dispatch(reduceTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, winner]);

  return (
    <InfoWrapper>
      <div style={{ marginRight: "8px" }}>
        {winner
          ? winner === "DRAW"
            ? "Draw"
            : `Winner: ${winner}`
          : `TimeLeft: ${timeLeft}`}
      </div>
      <div>{`Current player: ${player}`}</div>
    </InfoWrapper>
  );
};

export default Info;
