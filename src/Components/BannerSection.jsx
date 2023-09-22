import "./App.css";

const BannerSection = () => {
  return (
    <main className="banner container">
      <div className="banner-content">
        <div>
          {" "}
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        </div>

        <div>
        <a href='/'><button  className="banner-btn">Shop Now</button> </a>
        <a href='/'><button  className="banner-btn-trans">Categories</button> </a>
        </div>

        <div className="download-more">
          <p>Also Available On </p>
        </div>

        <div>
        <a href='/'> <img src="amazon.png" alt="Amazon" /> </a>
        <a href='/'> <img src="flipkart.png" alt="Flipcart" /> </a>
        </div>
      </div>
      <div>
        <img src="./hero-image.png" alt="Shoe" />
      </div>
    </main>
  );
};

export default BannerSection;
