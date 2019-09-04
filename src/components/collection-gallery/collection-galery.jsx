import React from "react";
import "./collection-gallery.scss";
import { CollectionItem } from "../collection-item/collection-item";

export const CollectionGallery = ({ photos }) => {
  return (
    <div className="collection__gallery">
      {photos.map(item => {
        return <CollectionItem key={item.title} item={item} />;
      })}
    </div>
  );
};
