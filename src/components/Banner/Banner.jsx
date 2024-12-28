import "./Banner.css"; // Import the CSS file

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-overlay">
        <div className="banner-content">
          {/* Tagline */}
          <div>
            <span className="banner-tag">Front End</span>

            {/* Title */}
            <h1 className="banner-title">Challenge React</h1>

            {/* Description */}
            <p className="banner-description">
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrás comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React.
            </p>
          </div>

          {/* Image Section */}
          <div className="banner-image">
            <img
              src="../../../public/img/banner.jpg" // Replace with the actual image URL
              alt="¿Qué significa pensar como programador?"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
