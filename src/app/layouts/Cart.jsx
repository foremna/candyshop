import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Counter from "../components/ui/Counter";

const Cart = () => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleRemoveFromCart = (product) => {
    const cartWithoutItem = cart.filter((item) => product !== item);
    setCart(cartWithoutItem);
  };

  const handleDicrement = (product) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity--;
    setCart(newCart);

    if (product.quantity < 1) {
      product.quantity = 1;
    }
  };

  const handleIncrement = (product) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity++;
    setCart(newCart);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  return (
    <>
      <div className="cart inner">
        <h3 className="headline headline--center">Your cart items</h3>
        {cart.length ? (
          <>
            {" "}
            <div className="cards-order row">
              {cart.map((product) => (
                <div key={product.id} className="card-order col-4">
                  <div className="card-order__content">
                    <img
                      src={product.img}
                      className="cards__image"
                      alt={product.name}
                    />
                    <Link
                      to={`/goods/${product.id}`}
                      className="card-order__title"
                    >
                      {product.name}
                    </Link>
                    <button
                      className="card-order__remove"
                      onClick={() => handleRemoveFromCart(product)}
                    ></button>
                  </div>
                  <div className="card-order__body">
                    <p className="card-order__price">
                      {product.price * product.quantity} <span>$</span>
                    </p>
                    <Counter
                      onAdd={handleIncrement}
                      onRemove={handleDicrement}
                      OnSetQuantity={setQuantity}
                      item={product}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="sub-total">
              <p className="sub-total__text">Sub-total</p>
              <p className="sub-total__sum">
                {getTotalSum()} <span>$</span>
              </p>
            </div>
          </>
        ) : (
          <div className="cart__not-products">
            <p className="cart__not-products-title">
              Странно, ты ещё ничего не добавил.
            </p>
            <span className="cart__not-products-text">
              У нас столько всего вкусного и необычного, обязательно попробуй.
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
