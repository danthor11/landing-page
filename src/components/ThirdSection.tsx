import Image2 from "../assets/images/Pic2.png";
import Image3 from "../assets/images/Pic3.png";
import Image4 from "../assets/images/Pic4.png";

const ThirdSection = () => {
  return (
    <div className="third-section">
      <div className="third-section-text">
        <h1 className="third-section-title">Lorem ipsum</h1>
        <p className="third-section-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          quisquam in illo quaerat ipsam reprehenderit, dolore atque voluptatum
          ullam unde.
        </p>
      </div>
      <div className="list-images">
        <div className="third-image">
          <img src={Image2} alt="image third 2" />
          <div className="third-image-text ">
            <p>Lorem ipsu</p>
          </div>
        </div>
        <div className="third-image">
          <img src={Image3} alt="image third 3" />
          <div className="third-image-text ">
            <p>Lorem ipsu</p>
          </div>
        </div>
        <div className="third-image">
          <img src={Image4} alt="image third 4" />
          <div className="third-image-text ">
            <p>Lorem ipsu</p>
          </div>
        </div>
      </div>

      <button className="third-section-button">Learn More</button>
    </div>
  );
};

export default ThirdSection;
