import { useState } from 'react';

const Shapes = () => {
  const [shapes, setShapes] = useState([
    {
      id: 1,
      type: 'circle',
      x: 50,
      y: 100,
    },
    {
      id: 2,
      type: 'square',
      x: 150,
      y: 100,
    },
    {
      id: 3,
      type: 'circle',
      x: 250,
      y: 100,
    },
    {
      id: 4,
      type: 'square',
      x: 350,
      y: 100,
    },
  ]);

  const handleClick = () => {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === 'circle') {
        return { ...shape, y: shape.y + 50 };
      } else {
        return shape;
      }
    });
    setShapes(nextShapes);
  };

  return (
    <>
      <button onClick={handleClick}>Move circles down</button>
      <div className="flex">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            style={{
              position: 'absolute',
              top: `${shape.y}px`,
              left: `${shape.x}px`,
              background: 'purple',
              width: '20px',
              height: '20px',
              borderRadius: shape.type === 'circle' ? '50%' : '',
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Shapes;

//* Largojeni butonin "Move circles down" dhe mundesojeni qe ne qdo klikim te nje forme te caktuar
// te vendoset ai element ne pozite poshte per 50px
