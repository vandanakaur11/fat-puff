import classes from "./WholeSale.module.css";

const Wholesale = () => {
    return (
        <div className={classes.WholeSaleWrapper}>
            <h1 className={classes.WholeSaleHeading}>
                Are you ordering for resale? Let us be your Vape Wholesale Distributor! Apply for Wholesale Access Below!
            </h1>
            <div className={classes.WholeSaleBottomWrapper}>
                <h2 className={classes.WholeSaleBottomHeading}>Fatpuff Empire Wholesale Application</h2>
                {/* <div className={classes.WholeSaleNameWrapper}>
                    <div>Name</div>
                    <input placeholder="Enter Name" />
                </div>
                <div className={classes.WholeSaleInfoWrapper}>
                    <div>Are you a business or individual?</div>
                    <div className={classes.WholeSaleInfoWrapperInner}>
                        <input type="radio" />
                        <div>Business</div>
                    </div>
                    <div className={classes.WholeSaleInfoWrapperInner}>
                        <input type="radio" />
                        <div>Individual</div>
                    </div>
                </div>
                <div className={classes.WholeSaleBusinessWrapper}>
                    <div>Business Name IF APPLICABLE</div>
                    <input />
                </div>
                <div className={classes.WholeSaleStateWrapper}>
                    <div>Which State are you located in? </div>
                    <input />
                </div>
                <div className={classes.WholeSalePurchaseWrapper}>
                    <div>I am interested in purchasing.... </div>
                    <div className={classes.WholeSalePurchaseWrapperInner}>
                        <input type="checkbox" />
                        <div>Airbar Products</div>
                    </div>
                    <div className={classes.WholeSalePurchaseWrapperInner}>
                        <input type="checkbox" />
                        <div>Puff Products (Bar, Plus, XXL/1600, Flow)</div>
                    </div>
                    <div className={classes.WholeSalePurchaseWrapperInner}>
                        <input type="checkbox" />
                        <div>Bang XXL</div>
                    </div>
                    <div className={classes.WholeSalePurchaseWrapperInner}>
                        <input type="checkbox" />
                        <div>Hyde Edge</div>
                    </div>
                    <div className={classes.WholeSalePurchaseWrapperInner}>
                        <input type="checkbox" />
                        <div>Ezzy Products</div>
                    </div>
                    <div className={classes.WholeSalePurchaseWrapperInner}>
                        <input type="checkbox" />
                        <div>Pop Products</div>
                    </div>
                    <div className={classes.WholeSalePurchaseWrapperInner}>
                        <input type="checkbox" />
                        <div>Mr. Fog Max</div>
                    </div>
                </div>
                <div className={classes.WholeSaleQuantityWrapper}>
                    <div className={classes.WholeSaleQuantityHeading}>The quantity of boxes I am looking for is... </div>
                    <div className={classes.WholeSaleQuantityWrapperInner}>
                        <input type="checkbox" />
                        <div>10 to 15 Boxes. (100 to 150 vape devices)</div>
                    </div>
                    <div className={classes.WholeSaleQuantityWrapperInner}>
                        <input type="checkbox" />
                        <div>15 to 20 Boxes. (150 to 200 vape devices)</div>
                    </div>
                    <div className={classes.WholeSaleQuantityWrapperInner}>
                        <input type="checkbox" />
                        <div>20+ boxes. (200 or more vape devices)</div>
                    </div>
                </div>
                <div className={classes.WholeSaleEmailWrapper}>
                    <div>Email</div>
                    <input type="email" placeholder="Enter Email" />
                </div>
                <div className={classes.WholeSalePhoneWrapper}>
                    <div>Phone</div>
                    <input placeholder="Enter Phone No" />
                </div>
                <div className={classes.WholeSaleQuestionWrapper}>
                    <div>Any Questions?</div>
                    <input />
                </div>
                <div className={classes.WholeSaleBtn}>Submit</div>
            </div>
            <div className={classes.WholeSaleContact}>
                <h1>Contact Us Today</h1>
                <h3>
                    Fat Puff will be the vape wholesale distributor for you! Our goal is to provide the best customer experience possible
                    for you, and that begins with contacting us as soon as possible! We have a variety of products for you to order and look
                    through, so you can find the perfect vape for yourself and your customers.
                </h3>
                <h3>
                    Call or text us at (407) 801-1596. Connect with us on{" "}
                    <span style={{ color: "#3b5998", fontWeight: "bold" }}>Facebook</span> as well! We have your fat puffs waiting!
                </h3> */}
                <iframe
                    className={classes.wholesaleIframe}
                    src="https://www.fatpuffwholesale.com/wholsale/"
                    title="fatpuff reviews"
                ></iframe>
            </div>
        </div>
    );
};

export default Wholesale;
