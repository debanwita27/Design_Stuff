import React from "react";
/**
 *
 * @param setState state from Home component
 * @param setRotation state from Home component
 * @param index index of current element of the array
 * @description setIndex -1 on mouse leave since -1 is
 * not an index in an array. 0 would've pointed to the
 * first element in the array
 *
 */
export const Title = ({ title, index, setRotation, setIndex }) => {
  return (
    <div
      className="title-item"
      onMouseEnter={() => setRotation(index)}
      onMouseLeave={() => setIndex(-1)}
    >
      <h1>{title}</h1>
      {/* <hr /> */}
    </div>
  );
};
