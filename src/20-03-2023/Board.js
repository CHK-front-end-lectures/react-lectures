import Square from './Square';

const Board = ({squares, xIsNext, status, onPlay}) => {
  const handleSquareClick = (index) => {
    if (squares[index] || status) {
      return; // early return
    }

    let nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = 'X';
    } else {
      nextSquares[index] = 'O';
    }
    onPlay(nextSquares);
  };

  // const renderWinner = () => {
  //   if (status === null) {
  //     return;
  //   }

  //   if(status === 'X') {
  //     return 'Winner is X'
  //   } else {
  //     return 'Winner is O'
  //   }
  // }

  return (
    <div className="game">
      {squares.map((square, index) => {
        return (
          <Square
            key={index}
            value={square}
            handleSquareClick={() => handleSquareClick(index)}
          />
        );
      })}
      {status && 'Winner is: ' + status}
      {/* {renderWinner()}
      {status === 'X' ? 'Winner is X' : 'Winner is O'} */}
    </div>
  );
};

// if, ternary operator, &&

export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // X ose O
    }
  }
  return null;
}

export default Board;

// Detyre: Hijezoni me ngjyre te kaltert variacionin fitues ne momentin qe kemi nje fitues.
