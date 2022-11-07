import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Good = ({ goods }) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <>
      {goods.map((good) => (
        <div key={good.id} className="card__item col-4">
          <div className="card__content">
            <img src={good.img} className="card__image" alt={good.name} />
            <Link to={`/goods/${good.id}`} className="card__title">
              {good.name}
            </Link>
            <p className="card__price mb-2">
              {good.price} <span>$</span>
            </p>
          </div>
          <div className="card__body">
            <button
              className="btn-yellow card__btn"
              onClick={() => handleAddToCart(good)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Good;
