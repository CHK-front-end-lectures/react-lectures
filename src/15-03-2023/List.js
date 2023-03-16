import { useState } from 'react';

const List = () => {
  const [array, setArray] = useState([32, 1, 4, 54, 7, 9]);
  const handleSort = () => {
    let sortedArray = [...array];
    sortedArray.sort((a, b) => {
      console.log('a', a);
      console.log('b', b);
      if (a > b) {
        return 1
      } else {
        return -1;
      }
      // return 0;
    });
    console.log('sortedArray', sortedArray);
    setArray(sortedArray);
  };

  const handleReverse = () => {
    let sortedArray = [...array];
    sortedArray.reverse();
    setArray(sortedArray);
  };
  return (
    <>
      <button onClick={handleSort}>Sort</button>
      <button onClick={handleReverse}>Reverse</button>
      <ul>
        {array.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
