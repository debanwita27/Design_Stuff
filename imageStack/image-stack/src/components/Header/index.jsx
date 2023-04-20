import React from "react";
import "./style.scss";

export const Header = () => {
  return (
    <ul className="header">
      <li>Home</li>
      <li className="active hide-xs">Work</li>
      <li className="hide-xs">Travel</li>
      <li>Menu</li>
    </ul>
  );
};
