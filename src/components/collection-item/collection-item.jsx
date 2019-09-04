import React from "react";
import "./collection-item.scss";
import { ButtonWithOutBorder } from "../button/button";

export const CollectionItem = ({ item: { photo, title, description } }) => {
  return (
    <div className="collection__gallery__item">
      <div
        className="collection__gallery__img"
        style={{ backgroundImage: `url(${photo}` }}
      ></div>
      <div className="collection__gallery__description">
        <h3 className="collection__gallery__title">{title}</h3>
        <p className="collection__gallery__subcontent">{description}</p>
        <ButtonWithOutBorder>Watch</ButtonWithOutBorder>
      </div>
    </div>
  );
};
