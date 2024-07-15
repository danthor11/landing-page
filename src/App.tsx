import "./App.css";
import ContactSection from "./components/ContactSection";
import FifthSection from "./components/FifthSection";
import FloatMenu from "./components/FloatMenu";
import Footer from "./components/Footer";
import FourthSection from "./components/FourthSection";
import Header from "./components/Header";

import NavBar from "./components/NavBar";
import SecondSection from "./components/SecondSection";
import SeventhSection from "./components/SeventhSection";
import SixthSection from "./components/SixthSection";
import ThirdSection from "./components/ThirdSection";
function App() {
  return (
    <>
      <Header />
      <NavBar />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <ContactSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
      <FloatMenu />
    </>
  );
}

export default App;
