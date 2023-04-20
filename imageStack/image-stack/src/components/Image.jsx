import React from "react";
import cn from "classnames";
/**
 *
 * @param {number} param0 degree of rotation of current
 * image. State from Home component
 */
export const Image = ({ url, active, rotationPosition }) => {
  return (
    <img
      className={cn({ active })}
      style={{
        transform: active
          ? `scale(1.1) rotate(${rotationPosition}deg)`
          : `rotate(${rotationPosition}deg)`,
      }}
      alt="brand "
      src={url}
    />
  );
};
