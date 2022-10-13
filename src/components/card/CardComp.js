import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getProductById } from "../../utils";
import classes from "./CardComp.module.css";

const CardComp = ({ image, name, price, category, id }) => {
    const src = image;
    const route = useRouter();
    // const handleClick = () => {
    //   route.push(`/product/${id}`);
    // };
    return (
        <Link href={`/product/${id}`}>
            <div className={classes.sliderMain}>
                <div className={classes.slider}>
                    {/* <Image alt="movie" loader={() => src} src={src} width={500} height={500} unoptimized /> */}
                    <Image alt={name} loader={() => src} src={src} width={300} height={300} unoptimized />
                </div>
                <div className={classes.sliderInfo}>
                    <div className={classes.inline}>
                        <p>{category}</p>
                    </div>
                    {price ? (
                        <div className={classes.priceTag} dangerouslySetInnerHTML={{ __html: price }} />
                    ) : (
                        // <div className={classes.priceTag}>$ {price}</div>
                        ""
                    )}
                    <div className={classes.productName} style={{ margin: "20px 0" }}>
                        {name}
                    </div>
                </div>
                <div className={classes.sliderButton}>{price ? `Select Options` : "Read More"}</div>
            </div>
        </Link>
    );
};
// CardComp.getInitialProps = async (router) => {
//   const res = await getProductById(`${router.query.id}`);
//   const json = await res.json();
//   console.log(json);

//   return { blog: json };
// };

export default React.memo(CardComp);
