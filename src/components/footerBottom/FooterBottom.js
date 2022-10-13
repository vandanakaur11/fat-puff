import classes from "./FooterBottom.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

const FooterBottom = () => {
    const imgSrc = "https://wpbingosite.com/wordpress/vapier/wp-content/webp-express/webp-images/uploads/2020/06/paymet-1.png.webp";
    const logoSrc = "https://i0.wp.com/www.fatpuffwholesale.com/wp-content/uploads/2020/05/fatpuff-logo-@3x.png?w=1971&ssl=1";
    return (
        <>
            <div className={classes.footerBottomText}>
                <div>
                    <span style={{ color: "#7b0e0e", fontWeight: "bold" }}>WARNING :</span> Electronic Cigarettes and E-liquid products may
                    contain nicotine, a chemical known to the State of California to cause birth defects or other reproductive harm. These
                    products are not smoking cessation products and have not been tested as such. E-liquid products, electronic delivery
                    devices, and accessories are intended for use by adults of legal smoking age (e.g., 21 years or older), and not by
                    children, women who are pregnant or breastfeeding, or persons with or at risk of heart disease, high blood pressure,
                    diabetes or taking medicine for depression or asthma, or who otherwise may be sensitive to nicotine. Nicotine is
                    addictive and habit forming, and it is very toxic by inhalation, in contact with the skin, or if swallowed. Ingestion of
                    the non-vaporized concentrated e-liquid ingredients can be poisonous. Keep away from children and pets. If ingested,
                    immediately consult your doctor or vet. Nicotine can increase your heart rate and blood pressure and cause dizziness,
                    nausea, and stomach pain. Inhalation of this product may aggravate existing respiratory conditions. These e-liquid
                    products have not been evaluated by the Food and Drug Administration nor are they intended to treat, mitigate, prevent
                    or cure any disease or condition.
                    <br />
                    <br />
                    {/* Owned by Vaeth Enterprise LLC.
                    <br />
                    <br />
                    ©https://fatpuffwholesale.com/ 2020, All Rights Reserved */}
                </div>
                <div className={classes.footerBottomContainer}>
                    <div className={classes.footerBottomLogo}>
                        <Image loader={() => logoSrc} src={logoSrc} unoptimized width={100} height={50} />
                    </div>
                    <div>
                        Owned by NAKV Enterprise INC.
                        <br />©{" "}
                        <a href="http://fatpuffwholesale.com/" target="blank">
                            https://fatpuffwholesale.com/{" "}
                        </a>{" "}
                        2022, All Rights Reserved
                    </div>
                </div>
            </div>
            <div className={classes.footerBottom}>
                <Grid container spacing={2}>
                    <Grid item md={6} sm={12} textAlign={"center"}>
                        <div className={classes.footerIconWrap}>
                            <LinkedInIcon className={classes.footerIconLinkedIn} />
                            <FacebookIcon className={classes.footerIconFb} />
                            <PinterestIcon className={classes.footerIconPint} />
                            <InstagramIcon className={classes.footerIconInsta} />
                        </div>
                    </Grid>
                    <Grid item md={6} sm={12} textAlign={"center"}>
                        <div className={classes.footerIconsImg}>
                            <Image loader={() => imgSrc} src={imgSrc} width={400} height={40} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default FooterBottom;
