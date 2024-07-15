import Image7 from "../assets/images/Pic7.png";
import Image8 from "../assets/images/Pic8.png";
import Image9 from "../assets/images/Pic9.png";
import Image10 from "../assets/images/Pic10.png";
import { useState } from "react";

const images = [Image7, Image8, Image9, Image10];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`image-${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
