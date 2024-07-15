import Logo from "../assets/images/icongrab.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </p>
      <img src={Logo} alt="prb_header" className="footer-image" />
      <p className="footer-text">All rights reserved to Lorem Ipsum© 2022</p>
    </footer>
  );
};

export default Footer;
