import Image from "../assets/images/Join Us.png";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <img src={Image} alt="image-contact" className="contact-section-image" />

      <form className="form-contact">
        <h1 className="form-contact-title">JOIN US</h1>
        <h1 className="form-contact-description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        </h1>

        <div className="form-two-cols-control">
          <input type="text" className="form-input" placeholder="Name" />
          <input type="text" className="form-input" placeholder="Username" />
        </div>
        <div className="form-two-cols-control">
          <input type="text" className="form-input" placeholder="Phone" />
          <input type="text" className="form-input" placeholder="Email" />
        </div>

        <input type="text" className="form-input" placeholder="Departamen" />

        <textarea
          className="form-input-textarea"
          placeholder="Mensaje"
        ></textarea>

        <button className="contact-button">I’M IN</button>
        <p className="form-contact-footer">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </form>
    </div>
  );
};

export default ContactSection;
