import './App.css';
import Gallery from './08-03-2023/Gallery';
// import ToggleButton from './08-03-2023/ToggleButton';
import { useState } from 'react';
import { sculptureList } from './06-03-2023/data';
import Increment from './08-03-2023/Increment';
import Form from './08-03-2023/Form';

function App() {
  const [index, setIndex] = useState(0);

  const hasPrev = index > 0; // 1, 2, 3 ..., 11
  const hasNext = index < sculptureList.length - 1; //11, 10,... 0,

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  const handlePreviousClick = () => {
    if (hasPrev) {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      {/* <Increment /> */}
      {/* <Gallery
        index={index}
        handleNextIndex={handleNextClick}
        handlePrevIndex={handlePreviousClick}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
      <Gallery
        index={index}
        handleNextIndex={handleNextClick}
        handlePrevIndex={handlePreviousClick}
        hasPrev={hasPrev}
        hasNext={hasNext}
      /> */}
      {/* <ToggleButton /> */}

      <Form />
    </div>
  );
}

export default App;
