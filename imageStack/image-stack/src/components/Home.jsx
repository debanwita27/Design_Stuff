import React, { useState } from "react";
import { pageData } from "../data.js";
import "../styles/home.scss";
import { Title } from "../components/Title.jsx";
import { Image } from "../components/Image.jsx";
import { Header } from "../components/Header/index.jsx";

const Home = () => {
  // array of rotaion values of every position as state
  const [rotationPosition, setRotationPosition] = useState(
    new Array(pageData.length).fill(0)
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  /**
   *
   * @param {Number} itemIndex current item index
   * @description Math.random()*7 will only give +ve values so
   * we randomly multiply with 1 or -1 to give random direction
   */
  const handleSetRotation = (itemIndex) => {
    const newRotation =
      Math.random() * 7 * (Math.round(Math.random()) ? 1 : -1);
    const tempState = [rotationPosition];
    tempState[itemIndex] = newRotation;
    setRotationPosition(tempState);
    setActiveIndex(itemIndex);
  };

  return (
    <>
      <Header />
      <div className="main-container" id="main-container">
        <div className="title-container">
          {pageData.map(({ title }, index) => (
            <Title
              key={index}
              title={title}
              index={index}
              setRotation={handleSetRotation}
              setIndex={setActiveIndex}
            />
          ))}
        </div>
        <div className="image-container">
          {pageData.map(({ url }, index) => (
            <Image
              key={index}
              url={url}
              active={activeIndex === index}
              rotationPosition={rotationPosition[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
