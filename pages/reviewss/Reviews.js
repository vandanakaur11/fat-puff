import React, { useState } from "react";

import classes from "./Reviews.module.css";
import { Grid } from "@mui/material";
import BasicRating from "../../src/components/ratingComp//RatingComp";
import { useRouter } from "next/router";
import Link from "next/link";

var reviewsData = [
    { heading: "Best places to get real disposables", paragraph: "Best places to get real disposables" },
    {
        heading: "Very good customer service and great people",
        paragraph:
            "This service was excellent and fast.Always nice and friendly and explained everythingwith detail and answered any question I had with an elaborate answer. OH, United Stated ",
    },
    {
        heading: "If you’re looking for somewhere to buy authentic vapes, choose them",
        paragraph:
            "If you’re looking for somewhere to buy authentic vapes, choose them.After trying several avenues I never found anywhere that gave me the level of service as they did. -OR, United States",
    },
    {
        heading: "If anything goes wrong with an order, they are always there to help you out and fix the situation",
        paragraph:
            "They have the best service, definitely recommend using them. If anything goes wrong with an order,they are always there to help you out and fix the situation. -Tx, United States",
    },
];

const Reviews = () => {
    const route = useRouter();
    const [star, setStar] = useState(0);
    return (
        <div className={classes.reviewsWrapper}>
            <h1 className={classes.heading}>Vape Reviews</h1>
            <h3 className={classes.subheading}>
                All reviews are 100% real and received via post-sale email form OR clicking the button below. We DON’T give anything out for
                positive vape reviews and do not trade product for reviews.
            </h3>
            {/* <Link href="/leaveReview/LeaveReviews"> */}
            <div className={classes.Btn} onClick={() => route.push("/leaveReview/LeaveReview")}>
                Review Us
            </div>
            {/* </Link> */}
            {/* <div className={classes.reviewsContentWrapper}>
                <Grid container spacing={3}>
                    {reviewsData?.map((data, index) => (
                        <Grid item sm={12} md={6} key={index}>
                            <div className={classes.reviewsContentInner}>
                                <h1>{data.heading}</h1>
                                <h3>{data.paragraph}</h3>
                                <BasicRating />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div> */}
            <iframe
                src="https://www.fatpuffwholesale.com/testimonials/"
                title="fatpuff reviews"
                // width={"100vw"}
                style={{ width: "100%", height: "100vh", border: "none", overflowY: "hidden" }}
            ></iframe>
        </div>
    );
};

export default Reviews;
