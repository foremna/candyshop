import React from "react";

const Counter = ({ onAdd, onRemove, OnSetQuantity, item }) => {
  return (
    <div className="increment-and-dicrement">
      <button
        className={
          "btn-dicrement" + (item.quantity === 1 ? " btn-disabled" : "")
        }
        onClick={() => onRemove(item)}
        disabled={item.quantity === 1}
      >
        -
      </button>
      <input
        type="text"
        value={item.quantity}
        onChange={(e) => OnSetQuantity(item, e.target.value)}
      />
      <button className="btn-increment" onClick={() => onAdd(item)}>
        +
      </button>
    </div>
  );
};

export default Counter;
