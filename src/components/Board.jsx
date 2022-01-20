import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { reduceTime, setSquare } from "store/ticTacToe/slice";

const BoardWrapper = styled.div`
  display: grid;
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
`;

const Tile = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;
`;

const Board = () => {
  const ticTacToe = useSelector((state) => state.ticTacToe);
  const { board, winner } = ticTacToe;
  const dispatch = useDispatch();

  const handleClick = (index) => {
    !winner && dispatch(setSquare(index));
  };

  return (
    <BoardWrapper>
      {board.map((tile, i) => (
        <Tile key={i} onClick={() => handleClick(i)}>
          {tile}
        </Tile>
      ))}
    </BoardWrapper>
  );
};
export default Board;
