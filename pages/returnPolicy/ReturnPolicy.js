import React from "react";
import classes from "./ReturnPolicy.module.css";

function ReturnPolicy() {
    return (
        <div className={classes.ReturnPolicyWrapper}>
            <h1>Return Policy</h1>
            <div>
                <img src="https://i1.wp.com/cdn11.bigcommerce.com/s-1j9fqgfxm8/product_images/uploaded_images/guaranteed-banner-600x600-2x.png?w=1200&ssl=1" />
            </div>
            <h4>Policy :</h4>
            <h5>Orders with any issues must contact within 48 hours of delivery date.</h5>
            <h5>Products with defects that come with a manufacturer warranty can be returned within 14 days of the delivery date.</h5>
            <h5>
                Orders with issues can email sales@fatpuffwholesale.com with a description, image of the issue and image of the packaging
                slip/invoice.
            </h5>
            <h5>
                Any returns where NAKV Enterprise Corp. is at fault will have shipping paid for by NAKV Enterprise Corp., otherwise shipping
                and handling will be charged for returns
            </h5>
            <h5>Products with defects that come with a manufacture warranty after 14 days must be dealt with the manufacturer warranty.</h5>
            <h5>
                Due to compatible pods being banned by the FDA starting February 6th 2020. Effective immediately we will not be taking
                returns on compatible pods. All sales are final. We do apologize for the inconvenience.
            </h5>
            <h5>
                We will always guarantee that satisfaction of our customers, if there ever is an issue please contact us we are here to keep
                our customers happy
            </h5>
        </div>
    );
}

export default ReturnPolicy;
