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

  const handleClick = (id) => {
    const nextShapes = shapes.map((shape) => {
      if (shape.y > 100) {
        return { ...shape, y: 100 };
      }
      if (shape.id === id) {
        return { ...shape, y: shape.y + 50 };
      } else {
        return shape;
      }
    });
    setShapes(nextShapes);
  };

  return (
    <>
      <div className="flex">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            style={{
              position: 'absolute',
              top: `${shape.y}px`,
              left: `${shape.x}px`,
              background: 'purple',
              width: '40px',
              height: '40px',
              borderRadius: shape.type === 'circle' ? '50%' : '',
            }}
            onClick={() => handleClick(shape.id)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Shapes;

//* Largojeni butonin "Move circles down" dhe mundesojeni qe ne qdo klikim te nje forme te caktuar
// te vendoset ai element ne pozite poshte per 50px
