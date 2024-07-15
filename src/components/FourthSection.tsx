import Image from "../assets/images/Pic5.png";

const FourthSection = () => {
  return (
    <div className="fourth-section">
      <div className="fourth-section-text">
        <p className="fourth-section-title">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="fourth-section-buttons">
          <button className="fourth-section-button-one">
            Lorem ipsum dolor
          </button>
          <button className="fourth-section-button-two">
            Lorem ipsum dolor sit amet
          </button>
        </div>
      </div>
      <div className="fourth-section-image-container">
        <img src={Image} alt="image-man" className="fourth-section-image" />
      </div>
    </div>
  );
};

export default FourthSection;
