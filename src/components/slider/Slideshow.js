import { Slide } from "react-slideshow-image";
import classes from "./Slideshow.module.css";
import "react-slideshow-image/dist/styles.css";
const slideImages = [
    "https://www.fatpuffwholesale.com/wp-content/uploads/2021/06/Banner-1-scaled.jpg",
    "https://www.fatpuffwholesale.com/wp-content/uploads/2021/06/Banner-2-scaled.jpg",
    "https://www.fatpuffwholesale.com/wp-content/uploads/2021/03/111.jpg",
    "https://www.fatpuffwholesale.com/wp-content/uploads/2021/12/CLOUD-PLUS-Banner-2-1-scaled.jpg",
    "https://www.fatpuffwholesale.com/wp-content/uploads/2021/06/Banner-4-scaled.jpg",
];

const Slideshow = () => {
    return (
        <div>
            <Slide easing="ease">
                <div className={classes.eachSlide}>
                    <div style={{ backgroundImage: `url(${slideImages[0]})` }}>{/* <span>Slide 1</span> */}</div>
                </div>
                <div className={classes.eachSlide}>
                    <div style={{ backgroundImage: `url(${slideImages[1]})` }}>{/* <span>Slide 2</span> */}</div>
                </div>
                <div className={classes.eachSlide}>
                    <div style={{ backgroundImage: `url(${slideImages[2]})` }}>{/* <span>Slide 3</span> */}</div>
                </div>
                <div className={classes.eachSlide}>
                    <div style={{ backgroundImage: `url(${slideImages[3]})` }}>{/* <span>Slide 4</span> */}</div>
                </div>
                <div className={classes.eachSlide}>
                    <div style={{ backgroundImage: `url(${slideImages[4]})` }}>{/* <span>Slide 4</span> */}</div>
                </div>
            </Slide>
        </div>
    );
};

export default Slideshow;
