// Externals
import { useState } from "react";

// Components
import Square from "../Square";

// Utils
import { calculateWinner } from "../../utils/helper";
import { initialBoard } from "../../utils/constants";

// Assets
import "./index.css";

const Board = () => {
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (calculateWinner(board) || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setBoard(initialBoard);
    setXIsNext(true);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? winner === "draw"
      ? "Draw"
      : `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="board-container">
      <h3 className="status">{status}</h3>
      <div className="board">
        {board.map((mark, index) => (
          <Square key={index} index={index} mark={mark} onClick={handleClick} />
        ))}
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Board;
