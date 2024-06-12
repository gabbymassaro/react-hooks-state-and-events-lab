import React, { useState } from "react";

function Item({ name, category }) {

  const [isItem, setIsItem] = useState(true)

  function handleClick(event) {
    setIsItem(!isItem)
  }

  const inCart = !isItem ? "in-cart" : ""

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
