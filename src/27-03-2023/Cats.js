import { useRef } from 'react';

const Cats = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const handleScrollToTom = () => {
    firstRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const handleScrollToMaru = () => {
    secondRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const handleScrollToJellyroum = () => {
    thirdRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <div>
      <nav>
        <button onClick={handleScrollToTom}>Scroll to Tom</button>
        <button onClick={handleScrollToMaru}>Scroll to Maru</button>
        <button onClick={handleScrollToJellyroum}>Scroll to Jellyroum</button>
      </nav>
      <ul>
        <li>
          <img
            ref={firstRef}
            src="https://placekitten.com/g/200/200"
            alt="Tom"
          />
        </li>
        <li>
          <img
            ref={secondRef}
            src="https://placekitten.com/g/300/200"
            alt="Maru"
          />
        </li>
        <li>
          <img
            ref={thirdRef}
            src="https://placekitten.com/g/250/200"
            alt="Jellyroum"
          />
        </li>
      </ul>
    </div>
  );
};

export default Cats;
