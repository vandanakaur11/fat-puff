import classes from "./Footer.module.css";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { useRouter } from "next/router";
const Footer = () => {
    const route = useRouter();
    return (
        <div className={classes.footerWrapper}>
            <Grid container spacing={2}>
                <Grid item md={3} sm={6} xs={12} textAlign={"center"}>
                    <div>
                        <div className={classes.footerOptionHead}>About Us</div>
                        <div className={classes.footerOption} onClick={() => route.push("/")}>
                            Home
                        </div>
                        <div className={classes.footerOption} onClick={() => route.push("/CartPage/CartPage")}>
                            Cart
                        </div>
                        <div className={classes.footerOption} onClick={() => route.push("/checkout/Checkout")}>
                            Checkout
                        </div>
                        <div className={classes.footerOption} onClick={() => route.push("/")}>
                            Shop
                        </div>
                        <div className={classes.footerOption} onClick={() => route.push("/wholesale")}>
                            Wholesale
                        </div>
                        <div className={classes.footerOption} onClick={() => route.push("/contactUs/ContactUs")}>
                            Contact
                        </div>
                    </div>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign={"center"}>
                    <div>
                        <div className={classes.footerOptionHead}>Help and Policies</div>

                        <div className={classes.footerOption} onClick={() => route.push("/privacyPolicy/PrivacyPolicy")}>
                            Privacy Policy
                        </div>

                        <div className={classes.footerOption}>Authenticate</div>
                        <div className={classes.footerOption} onClick={() => route.push("/returnPolicy/ReturnPolicy")}>
                            Return Policy
                        </div>
                        <div className={classes.footerOption} onClick={() => route.push("/termsNconditions/TermsAndConditions")}>
                            Terms and Conditions
                        </div>
                        <div className={classes.footerOption} onClick={() => route.push("/shipping/Shipping")}>
                            Shipping
                        </div>
                        <div className={classes.footerOption}></div>
                    </div>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign={"center"}>
                    <div className={classes.footerHeading}>Thank You!</div>
                    <div className={classes.footerPara}>
                        Terms and Conditions Shipping Thank You! Thank you to all of our customers, without you, obviously we’d be nothing.
                        We strive to serve you to the best of our ability.
                    </div>
                </Grid>
                <Grid item md={3} sm={6} xs={12} textAlign={"center"}>
                    <div className={classes.footerHeading}>Contact Info</div>
                    <div className={classes.footerPara}>
                        Fatpuff Wholesale 407-801-1596 sales@fatpuffwholesale.com 500 N Harbor City BLVD Melbourne, Florida 32935
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
