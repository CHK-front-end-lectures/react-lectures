import Board from '../20-03-2023/Board';
import { useState } from 'react';
import { calculateWinner } from '../20-03-2023/Board';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove];
  const status = calculateWinner(currentSquares);

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // console.log('nextHistory', nextHistory);
    setHistory(nextHistory);
    // console.log('history', history);
    setCurrentMove(nextHistory.length - 1);
  };

  const handleNextMove = (move) => {
    setCurrentMove(move);
  };

  return (
    <div>
      <Board
        squares={currentSquares}
        xIsNext={xIsNext}
        status={status}
        onPlay={handlePlay}
      />
      <div className="moves">
        {history.map((history, move) => {
          return (
            <div
              key={move}
              className="move"
              onClick={() => handleNextMove(move)}
            >
              Go to move #{move}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
