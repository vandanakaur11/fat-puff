import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./MultiSlideshow.module.css";
import CardComp from "../card/CardComp";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  smallmobile: {
    breakpoint: { max: 463, min: 350 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "https://i2.wp.com/www.fatpuffwholesale.com/wp-content/uploads/2021/07/5-1-1-1-1-2-3.png?resize=300%2C300&ssl=1",
  },
  {
    url: "https://i2.wp.com/www.fatpuffwholesale.com/wp-content/uploads/2021/11/CaliPlusFrozenKiwiLemonadeDisposableDevice_67388f91-6741-4126-a330-2511dffb5d74_600x-removebg-preview-2.png?resize=300%2C300&ssl=1",
  },
  //Second image url
  {
    url: "https://i0.wp.com/www.fatpuffwholesale.com/wp-content/uploads/2021/02/PineappleLemonade_700x-1-6-1-5.png?resize=300%2C300&ssl=1",
  },
  //Third image url
  {
    url: "https://i1.wp.com/www.fatpuffwholesale.com/wp-content/uploads/2021/05/5-1-1-removebg-preview-1-2.png?resize=300%2C300&ssl=1",
  },

  //Fourth image url

  {
    url: "https://i2.wp.com/www.fatpuffwholesale.com/wp-content/uploads/2021/01/PineappleLemonade_700x-1-6-1-6.png?resize=300%2C300&ssl=1",
  },
];
const Slider = ({ products }) => {
  return (
    <div
      className="parent"
      style={{ overflow: "hidden", marginBottom: "10vh" }}
    >
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {products?.slice(0, 5).map((prod, i) => {
          return (
            <div key={i}>
              {/* <div className={classes.slider} key={index}>
                                <img src={imageUrl.url} alt="movie" />
                            </div>
                            <div className={classes.sliderInfo}>
                                <div style={{ margin: "25px 0" }}>Product Name</div>
                                <div style={{ margin: "25px 0" }}>$Price</div>
                            </div>
                            <div className={classes.sliderButton}>Select Options</div> */}

              <CardComp
                image={prod?.images[0].src}
                name={prod?.name}
                price={prod?.price}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
