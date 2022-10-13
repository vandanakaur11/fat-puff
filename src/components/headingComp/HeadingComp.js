import classes from "./HeadingComp.module.css";

const HeadingComp = () => {
    return (
        <div>
            <h1 className={classes.headingOne}>Shop - Fat Puff</h1>
            <h3 className={classes.headingTwo}>Your reliable source for Puff Plus, Pop Xtra, Bidi Stick and more.</h3>
        </div>
    );
};

export default HeadingComp;
