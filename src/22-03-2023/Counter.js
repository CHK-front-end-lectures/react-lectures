import { useEffect, useRef, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleStateClick = () => {
    setCount(count + 1);
  };

  const handleRefClick = () => {
    console.log('countRef', countRef.current);
    countRef.current += 1;
  };
  return (
    <>
      <button onClick={handleStateClick}>You clicked {count} in state</button>
      <button onClick={handleRefClick}>
        You clicked {countRef.current} in ref
      </button>
    </>
  );
};

export default Counter;
