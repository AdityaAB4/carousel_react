import { IMAGES } from "./IMAGES";
import "./App.css";
import { useState } from "react";

function App() {
  const [currIndex, setCurrIndex] = useState(0);

  const prevHandler = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    }
  };

  const nextHandler = () => {
    if (currIndex < IMAGES.length - 1) {
      setCurrIndex(currIndex + 1);
    }
  };

  return (
    <div className="main">
      <button
        onClick={prevHandler}
        className={currIndex === 0 ? "disable-btn" : "active-btn"}
        disabled={currIndex === 0}
      >
        &lt;
      </button>

      <div className="carousel">
        {IMAGES.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`img-style ${currIndex === index ? "active" : ""}`}
          />
        ))}
      </div>

      <button
        onClick={nextHandler}
        className={
          currIndex === IMAGES.length - 1 ? "disable-btn" : "active-btn"
        }
        disabled={currIndex === IMAGES.length - 1}
      >
        &gt;
      </button>
    </div>
  );
}

export default App;
