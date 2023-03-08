import { useState } from 'react';

const Increment = () => {
  const [value, setValue] = useState(0); // hook

  const handleIncrement = () => {
    setValue(value + 1); // 0 + 1
    setValue(value + 1); // 0 + 1
    setValue(value + 1); // 0 + 1
    setValue(value + 5);
  }

  return (
    <>
      {value}
      <button onClick={handleIncrement}>+</button>
    </>
  )
}

export default Increment;