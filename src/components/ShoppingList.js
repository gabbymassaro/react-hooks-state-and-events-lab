import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  let newMap

  function handleChange(event) {
    setSelectedCategory(event.target.value)
  }

  function filterCategories() {
    newMap = []
    items.filter(item => {
      if (item.category === selectedCategory){
        newMap.push(item)
      } else if (selectedCategory === "All") {
        newMap = [...items]
      }
      return newMap
    })
  }

  filterCategories()

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newMap.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
