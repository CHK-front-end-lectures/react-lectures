import { useState } from 'react';
import { sculptureList } from './data';

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    console.log('index', index);
    if (index >= 11) {

    }
    setIndex(index + 1)
  };

  const handlePreviousClick = () => {
    if (index <= 0) {

    }
    setIndex(index - 1)
    
  };

  let sculpture = sculptureList[index];
  return (
    <>
      <div>
        {sculpture.name} of {sculpture.artist}
      </div>
      <div>
        {index} of {sculptureList.length}
      </div>
      <img src={sculpture.url} alt={sculpture.alt} />
      <div>{sculpture.description}</div>

      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>

    </>
  );
};

// Nese klikoni next deri ne elementin 11, pas elementit te 11 shfaqet nje error
// Arsyeja eshte: po tentojme te marrim nje element jashte numrit te objekteve te deklaruara ne array
// Shtoni edhe nje button (Prev) qe shfrytezohet per ta shfaqur elementin prapa
// Kur jemi ne elementin 11, buttoni next te jete i pa klikushem - vetem butoni Prev mundet te klikohet

export default Gallery;
