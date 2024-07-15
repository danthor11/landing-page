import Image from "../assets/images/Pic1.png";

const FifthSection = () => {
  return (
    <div className="fifth-section">
      <h1 className="fifth-title">Latest videos</h1>
      <div className="fifth-list-images">
        <div>
          <img src={Image} alt="Lorem ipsum 1" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <img src={Image} alt="Lorem ipsum 2" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <img src={Image} alt="Lorem ipsum 3" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <img src={Image} alt="Lorem ipsum 1" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <img src={Image} alt="Lorem ipsum 2" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <img src={Image} alt="Lorem ipsum 3" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      <div>
        <button className="fift-section-image-button">View all</button>
      </div>
    </div>
  );
};

export default FifthSection;
