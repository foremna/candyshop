import React, { useState, useEffect } from "react";

import GoBack from "../../ui/GoBack";
import Loading from "../../ui/Loading";

const GoodPage = ({ api, goodId }) => {
  const [currentGood, setCurrentGood] = useState(false);
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    api.goods.getById(goodId).then((data) => setCurrentGood(data));
  });

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
      {currentGood ? (
        <>
          <GoBack />
          <div className="current-good mt-4">
            <div className="current-good__card">
              <img
                src={currentGood.img}
                alt=""
                className="current-good__image"
              />
              <div className="current-good__content ms-4">
                <h3 className="current-good__title">{currentGood.name}</h3>
                <h4 className="current-good__price">
                  {currentGood.price}
                  <span>$</span>
                </h4>
                <p className="current-good__category">
                  {currentGood.category.name}
                </p>
                <button
                  href="#"
                  className="btn-yellow btn-lg"
                  onClick={() => handleAddToCart(currentGood)}
                >
                  Add to basket
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default GoodPage;
