import React from "react";
import classes from "./Shipping.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
function Shipping() {
    const route = useRouter();
    return (
        <div className={classes.shippingWrapper}>
            <h1>Shipping</h1>
            <h2>How do we ship? How long is handling? How do I track my order?</h2>
            <h3>1 - We ship everything USPS Flat-Rate.</h3>
            <h3>2 - Everything will be shipped out within 2 BUSINESS days</h3>
            <h3>
                3 - You should be able to track your order on your{" "}
                <a href="#" onClick={() => route.push("/account/AccountPage")}>
                    account page
                </a>
                , however if you can not send an email to sales@fatpuffwholesale.com
            </h3>
            <h1 className={classes.shippingWrapperSecondHeading}>Contact Us Today For Disposable Vapes In Bulk</h1>
            <h3>
                Fat puff will provide you the best quality vapes that we can! We use the best shipping methods so that it will arrive
                swiftly and safely.
                <Link href="/wholesale"> Order today</Link> and get your disposable vapes in bulk as soon as possible!
            </h3>
            <h3>
                Call or text us at (407) 801-1596. Don’t be afraid to contact us on{" "}
                <a href="https://www.facebook.com/fatpuffwholesale/" target="blank">
                    {" "}
                    Facebook
                </a>{" "}
                either! We have your fat puffs waiting!
            </h3>
        </div>
    );
}

export default Shipping;
