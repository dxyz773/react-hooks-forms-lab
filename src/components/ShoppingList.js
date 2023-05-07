import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filter, setFilter] = useState("");
  const newFoodTemplate = { name: "", category: "Produce" };
  const [newFood, setNewFood] = useState(newFoodTemplate);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e) {
    setFilter(e.target.value);
  }

  function handleNewFood(e) {
    const name = e.target.name;

    let value = e.target.value;

    const newFoodObj = { ...newFood, [name]: value };
    setNewFood(newFoodObj);
  }

  const itemsToDisplay = items.filter((item) => {
    return (
      (selectedCategory === "All" || selectedCategory === item.category) &&
      (filter === "" || item.name.toLowerCase().includes(filter.toLowerCase()))
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        handleNewFood={handleNewFood}
        onItemFormSubmit={onItemFormSubmit}
        newFood={newFood}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange}
        filter={filter}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
