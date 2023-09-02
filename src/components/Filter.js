import React from "react";

function Filter({onCategoryChange}){

    function handleSelectChange(event) {
        const selectedCategory = event.target.value;
        onCategoryChange(selectedCategory);
    }

    return (
        <div className="Filter">
        <select name="filter" onChange={handleSelectChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    );
}

export default Filter;