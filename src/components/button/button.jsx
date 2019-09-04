import React from "react";
import "./button.scss";
import iconSet from "../../assets/selection.json";
import IcomoonReact from "icomoon-react";
export const ButtonWithOutBorder = ({ children, dark }) => (
  <button className={`button button-no-border ${dark ? null : "button-white"}`}>
    {children}{" "}
    <IcomoonReact
      iconSet={iconSet}
      color="#ffffff"
      size={20}
      icon="arrow-right"
    />
  </button>
);

export const ButtonWithOutBackground = ({ children, dark }) => (
  <button className={`button button-no-bg ${dark ? null : "button-white"}`}>
    {children}{" "}
    <IcomoonReact
      iconSet={iconSet}
      color={dark ? "#8a8585" : "#ffffff"}
      size={20}
      icon="arrow-right"
    />
  </button>
);
