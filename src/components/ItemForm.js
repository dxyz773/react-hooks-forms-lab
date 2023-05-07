import React from "react";

function ItemForm({ handleNewFood, onItemFormSubmit, newFood }) {
  return (
    <form onSubmit={(e) => onItemFormSubmit(newFood, e)} className="NewItem">
      <label>
        Name:
        <input onChange={handleNewFood} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleNewFood} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
