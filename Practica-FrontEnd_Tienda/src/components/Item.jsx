// Item.jsx
import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

const Item = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => [
      ...currItems,
      { id: product.id, quantity: 1, price: product.price }
    ]);
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(product.id);

  return (
    <div className="item-box">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}

      <div>{product.name}</div>
      <img
        src={`data:image/png;base64,${product.imgUrlBase64}`}
        alt={product.name}
        style={{ width: "100px", height: "100px" }}
      />
      <div className="item-description">{product.description}</div>
      <div className="item-price">${product.price}</div>

      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={addToCart}>
          + Add to cart
        </button>
      ) : (
        <>
          <button className="item-plus-button" onClick={addToCart}>
            + add more
          </button>
          <button className="item-minus-button" onClick={() => removeItem(product.id)}>
            subtract item
          </button>
        </>
      )}
    </div>
  );
};

export default Item;
