import Image from "../assets/images/Pic6.png";

const SixthSection = () => {
  return (
    <div className="sixth-section">
      <img src={Image} alt="background" className="sixth-section-image" />
      <div className="sixth-section-container">
        <h1 className="sixth-section-title">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="sixth-section-description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <button className="sixth-section-button">VIEW ALL</button>
      </div>
    </div>
  );
};

export default SixthSection;
