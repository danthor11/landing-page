import GlassImage from "../assets/images/Pic1.png";

const SecondSection = () => {
  return (
    <div className="second-section">
      <div className="second-section-container second-section-description">
        <h1 className="second-section-title">Lorem ipsum dolor sit amet.</h1>
        <p className="second-section-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          est eos modi libero atque tempora, minima neque quas quia veritatis
          delectus maxime expedita! Nisi, adipisci molestias! Nulla fugiat dolor
          fugit! Assumenda deleniti aut quos libero eius omnis quaerat, nam fuga
          voluptatem magni asperiores atque quibusdam in rem quam esse aliquam
          vero porro necessitatibus reiciendis labore perspiciatis? Quisquam,
          nam expedita modi accusantium unde ex hic et ipsam ut eos ipsa
          adipisci omnis quasi quos inventore! Quia vel autem tempora asperiores
          aut!
        </p>
      </div>
      <div className="second-section-container ">
        <img
          src={GlassImage}
          alt="second-section-image"
          className="second-section-image"
        />
      </div>
    </div>
  );
};

export default SecondSection;
