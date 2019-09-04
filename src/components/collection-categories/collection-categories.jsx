import React from "react";
import "./collection-categories.scss";

export const CollectionCategories = ({ categories, handleCategorieClick }) => (
  <div>
    <ul className="collection__categories">
      {categories.map(category => (
        <li
          key={category}
          className="collection__categories__option"
          onClick={() => handleCategorieClick(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  </div>
);
