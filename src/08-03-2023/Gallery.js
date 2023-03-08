// Nese klikoni next deri ne elementin 11, pas elementit te 11 shfaqet nje error
// Arsyeja eshte: po tentojme te marrim nje element jashte numrit te objekteve te deklaruara ne array
// Shtoni edhe nje button (Prev) qe shfrytezohet per ta shfaqur elementin prapa
// Kur jemi ne elementin 11, buttoni next te jete i pa klikushem - vetem butoni Prev mundet te klikohet

import { useState } from 'react';
import { sculptureList } from '../06-03-2023/data';

const Gallery = ({
  index,
  handlePrevIndex,
  handleNextIndex,
  hasPrev,
  hasNext,
}) => {
  const [showMore, setShowMore] = useState(false);

  let sculpture = sculptureList[index]; // 0, 1,2
  return (
    <>
      <div>
        {sculpture.name} of {sculpture.artist}
      </div>
      <div>
        {index} of {sculptureList.length - 1}
      </div>
      <button onClick={() => setShowMore(!showMore)}>Show more</button>
      <img src={sculpture.url} alt={sculpture.alt} />

      {showMore && <div>{sculpture.description}</div>}

      <button onClick={handlePrevIndex} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleNextIndex} disabled={!hasNext}>
        Next
      </button>
    </>
  );
};

export default Gallery;
