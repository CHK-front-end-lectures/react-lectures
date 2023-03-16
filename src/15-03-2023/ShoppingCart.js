import { useState } from 'react';

const initialProducts = [
  {
    id: 1,
    name: 'Cheese',
    count: 1,
  },
  {
    id: 2,
    name: 'Milk',
    count: 6,
  },
  {
    id: 3,
    name: 'Tea',
    count: 4,
  },
];

let nextId = 4;
const ShoppingCart = () => {
  const [products, setProducts] = useState(initialProducts);
  const [productName, setProductName] = useState('');
  const [productCount, setProductCount] = useState(0);

  const handleIncreaseClick = (id) => {
    const editedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count + 1 };
      } else {
        return product;
      }
    });

    setProducts(editedProducts);
  };

  const handleDecreaseClick = (id) => {
    let editedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count - 1 };
      } else {
        return product;
      }
    });

    setProducts(editedProducts.filter((product) => product.count > 0));
  };

  const handleNameChange = (evt) => {
    setProductName(evt.target.value);
  };

  const handleCountChange = (evt) => {
    setProductCount(evt.target.value);
  };

  const handleAddProduct = (evt) => {
    evt.preventDefault();
    setProducts([
      ...products,
      { id: nextId++, name: productName, count: productCount },
    ]);
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={productName}
          onChange={(evt) => handleNameChange(evt)}
        />
        <label htmlFor="count">Count</label>
        <input
          type="number"
          value={productCount}
          onChange={(evt) => handleCountChange(evt)}
        />
        <button onClick={handleAddProduct}>Add</button>
      </form>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} ({product.count})
              <button onClick={() => handleIncreaseClick(product.id)}>+</button>
              <button onClick={() => handleDecreaseClick(product.id)}>-</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ShoppingCart;
