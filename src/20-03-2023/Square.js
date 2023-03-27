const Square = ({ value, handleSquareClick, isHighlighted }) => {
  return (
    <button
      onClick={handleSquareClick}
      style={{ backgroundColor: isHighlighted ? 'blue' : 'white' }}
    >
      {value}
    </button>
  );
};

export default Square;
