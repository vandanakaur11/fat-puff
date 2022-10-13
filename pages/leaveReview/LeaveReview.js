import classes from "./LeaveReview.module.css";
import React, { useState, useEffect } from "react";
import BasicRating from "../../src/components/ratingComp/RatingComp";
import axios from "axios";

const LeaveReviews = () => {
    const [star, setStar] = useState(0);
    const [name, setName] = useState("");
    const [orderNo, setOrderNo] = useState("");
    const [state, setState] = useState("");

    return (
        <div className={classes.leaveReviewWrapper}>
            <h1>Leave a review</h1>
            <div className={classes.leaveReviewInner}>
                {/* <div>
                    <div className={classes.headings}>Name</div>
                    <div>
                        <input className={classes.input} />
                    </div>
                    <div className={classes.headings}>Order Number</div>
                    <div>
                        <input className={classes.input} />
                    </div>
                    <div className={classes.headings}>State</div>
                    <div>
                        <input className={classes.input} />
                    </div>
                    <div className={classes.headings}>Review</div>
                    <div>
                        <input className={classes.inputReview} />
                    </div>
                    <div className={classes.headings}>Rating</div>
                    <div className={classes.stars}>
                        <BasicRating star={star} setStar={setStar} />
                    </div>
                </div>
                <div className={classes.Btn} onClick={() => leaveRev()}>
                    Submit
                </div> */}
                <iframe
                    className={classes.leaveReviewIframe}
                    src="https://www.fatpuffwholesale.com/wp-frm/"
                    title="fatpuff reviews"
                ></iframe>
            </div>
        </div>
    );
};

export default LeaveReviews;
