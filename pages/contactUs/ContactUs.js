import React from "react";
import classes from "./ContactUs.module.css";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";

import Map from "../../src/components/map/Map";
import Link from "next/link";

function ContactUs() {
    const logoSrc = "https://i0.wp.com/www.fatpuffwholesale.com/wp-content/uploads/2020/05/fatpuff-logo-@3x.png?w=1971&ssl=1";
    return (
        <div className={classes.contactUsWrapper}>
            <h1>Contact</h1>
            <div className={classes.contactUsInner}>
                <div className={classes.contactUsInnerLeft}>
                    <Map />
                </div>
                <div className={classes.contactUsInnerRight}>
                    <div>
                        <h2 className={classes.rightHeading}>Contact Details</h2>
                        <h2 className={classes.rightSubHeading}>NAKV ENTERPRISES INC. (USA)</h2>
                        <div className={classes.contactIconInfo}>
                            <DraftsIcon className={classes.icons} />
                            <h4>sales@fatpuffwholesale.com</h4>
                        </div>
                        <div className={classes.contactIconInfo}>
                            <LocalPhoneIcon className={classes.icons} />
                            <h4>(407) 801-1596</h4>
                        </div>
                        <div className={classes.contactIconInfo}>
                            <SendIcon className={classes.icons} />
                            <h4>500 N Harbor City BLVD, Melbourne, 32935</h4>
                        </div>
                    </div>
                    <div>
                        <h2 className={classes.rightSubHeading}>NAKV ENTERPRISES LTD. (UK/EU)</h2>
                        <div className={classes.contactIconInfo}>
                            <DraftsIcon className={classes.icons} />
                            <h4>sales@fatpuffwholesale.com</h4>
                        </div>
                        <div className={classes.contactIconInfo}>
                            <LocalPhoneIcon className={classes.icons} />
                            <h4>+44 208 007 6995</h4>
                        </div>
                        <div className={classes.contactIconInfo}>
                            <SendIcon className={classes.icons} />
                            <h4>69 Canal ST. Newert. Co. Down, Northern Ireland, BT356JF</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bottomContent}>
                <div className={classes.logoDiv}>
                    <img src={logoSrc} className={classes.logo} />
                </div>
                <h1>Your Vape Distribution Service</h1>
                <h3>
                    Contact at any time of the day, any day of the week. We are here to change what it means to be a vape distributor.
                    Whatever your inquiry or issue is, we will work around the clock to resolve it in 24 hours or less! We aim to make all
                    <span>
                        <Link href="/fatpuffWholesale/FatPuffWholesale"> Fat Puff Wholesale </Link>
                    </span>
                    customers have an exceeded expectations experience with us! We offer a variety of brands, such as:
                </h3>
                <h3 className={classes.variety}>Juucy</h3>
                <h3 className={classes.variety}>Air Bar</h3>
                <h3 className={classes.variety}>Bang</h3>
                <h3 className={classes.variety}>Puff</h3>
                <h3 className={classes.variety}>Fume</h3>
                <h3 className={classes.variety}>Ezzy</h3>
                <h3 className={classes.variety}>And more!</h3>
                <h3>
                    If you don’t see the brand you want on our site, shoot us a text or call us, and we’ll see what we can do to get the
                    brand you desire in bulk!
                </h3>
                <h1>Contact Us Today</h1>
                <h3>
                    When you purchase from Fat Puff Wholesale, you’ll find only high-quality vapes in bulk without adding to the price tag!
                    Come get it! What are you waiting for? Check out the Fat Puff difference today. We want to be the vape distribution
                    service for you! Call or text us at (407) 801-1596. Don’t be afraid to reach out to us on <span> Facebook </span> as
                    well! We have your fat puffs waiting!
                </h3>
            </div>
        </div>
    );
}

export default ContactUs;
