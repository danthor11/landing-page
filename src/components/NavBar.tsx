import Logo from "../assets/images/icongrab.png";
import ContentBG from "../assets/images/Prb Header.png";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={ContentBG} alt="main-content-bg" className="Navbackground" />
        <div className="contentNav">
          <div className="headerNav">
            <img src={Logo} alt="grab" className="iconHeadernNav" />
            <div className="contentNavBody">
              <div className="routeNav">
                <a href="" className="route">
                  LOREM IPSUM
                </a>
                <a href="" className="route">
                  LOREM IPSUM
                </a>
                <a href="" className="route">
                  LOREM IPSUM
                </a>
                <a href="" className="route">
                  LOREM IPSUM
                </a>
                <a href="" className="route">
                  LOREM IPSUM
                </a>
                <a href="" className="route">
                  LOREM IPSUM
                </a>
              </div>
              <div className="bodyNav">
                <div>
                  <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                  <h1 className="bodyNavTitle2">LOREM IPSUM DOLOR &nbsp;</h1>
                  <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                </div>
                <div>
                  <button className="bodyNavButton">WHAT IS NEXT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="footerNav">
        <div className="footerContenTextNav">
          <p>Lorem ipsum dolor sit amet, consetetur</p>
        </div>
        <div className="footerContenTimeNav">
          <div className="blockTime">
            <span>170</span>
            <span className="blockSpan">days</span>
          </div>

          <div className="blockTime left-line">
            <span>13</span>
            <span className="blockSpan">Hour</span>
          </div>

          <div className="blockTime left-line">
            <span>39</span>
            <span className="blockSpan">Minutes</span>
          </div>

          <div className="blockTime left-line">
            <span>29</span>
            <span className="blockSpan">Seconds</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
