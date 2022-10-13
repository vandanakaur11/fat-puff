import classes from "./FeatureOptions.module.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SendIcon from "@mui/icons-material/Send";
import ShieldIcon from "@mui/icons-material/Shield";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import Link from "next/link";
const FeatureOptions = () => {
    const route = useRouter();
    return (
        <Grid container spacing={2}>
            <Grid item md={3} sm={6} xs={12}>
                <div className={classes.featureOptionsInner}>
                    <div className={classes.featureIconsWrapper}>
                        <LocalShippingIcon className={classes.featureIcons} />
                    </div>
                    <h3>DISCREET SHIPPING</h3>
                    <p>We ship everything USPS Priority in a PLAIN brown box. There is NO packaging related to vapes/vaping or tobacco.</p>
                </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <div className={classes.featureOptionsInner}>
                    <div className={classes.featureIconsWrapper}>
                        <SupportAgentIcon className={classes.featureIcons} />
                    </div>
                    <h3>SUPPORT 24/7</h3>
                    <p>We ship everything USPS Priority in a PLAIN brown box. There is NO packaging related to vapes/vaping or tobacco.</p>
                </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <div className={classes.featureOptionsInner}>
                    <div
                        className={classes.featureIconsWrapper}
                        //  onClick={() => route.push("../../../pages/wholesale")}
                    >
                        <Link href="/wholesale">
                            <SendIcon className={classes.featureIcons} />
                        </Link>
                    </div>
                    <h3>APPLY FOR WHOLESALE PRICING</h3>
                    <p>You can check our price for wholesale Open your product, if you dont like it, you can return it!</p>
                </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <div className={classes.featureOptionsInner}>
                    <div className={classes.featureIconsWrapper}>
                        <ShieldIcon className={classes.featureIcons} />
                    </div>
                    <h3>SECURE CHECKOUT</h3>
                    <p>We ship everything USPS Priority in a PLAIN brown box. There is NO packaging related to vapes/vaping or tobacco.</p>
                </div>
            </Grid>
        </Grid>
        // <div className={classes.featureOptionsWrapper}>
        //     <div className={classes.featureOptionsInner}>
        //         <div className={classes.featureIconsWrapper}>
        //             <LocalShippingIcon className={classes.featureIcons} />
        //         </div>
        //         <h3>DISCREET SHIPPING</h3>
        //         <p>We ship everything USPS Priority in a PLAIN brown box. There is NO packaging related to vapes/vaping or tobacco.</p>
        //     </div>
        //     <div className={classes.featureOptionsInner}>
        //         <div className={classes.featureIconsWrapper}>
        //             <SupportAgentIcon className={classes.featureIcons} />
        //         </div>
        //         <h3>SUPPORT 24/7</h3>
        //         <p>We ship everything USPS Priority in a PLAIN brown box. There is NO packaging related to vapes/vaping or tobacco.</p>
        //     </div>
        //     <div className={classes.featureOptionsInner}>
        //         <div className={classes.featureIconsWrapper}>
        //             <SendIcon className={classes.featureIcons} />
        //         </div>
        //         <h3>48 HOUR RETURN</h3>
        //         <p>We ship everything USPS Priority in a PLAIN brown box. There is NO packaging related to vapes/vaping or tobacco.</p>
        //     </div>
        //     <div className={classes.featureOptionsInner}>
        //         <div className={classes.featureIconsWrapper}>
        //             <ShieldIcon className={classes.featureIcons} />
        //         </div>
        //         <h3>SECURE CHECKOUT</h3>
        //         <p>We ship everything USPS Priority in a PLAIN brown box. There is NO packaging related to vapes/vaping or tobacco.</p>
        //     </div>
        // </div>
    );
};

export default FeatureOptions;
