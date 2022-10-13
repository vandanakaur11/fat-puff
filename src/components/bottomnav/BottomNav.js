import { useState } from "react";
import classes from "./BottomNav.module.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { useRouter } from "next/router";

// var customerData = [
//     // { name: "CERAMIC CARTRIDGES" },
//     "CART",
//     "CHECKOUT",
//     "CONTACT",
//     "HOME",
//     "MY ACCOUNT",
// ];

var customerData = [
    { name: "CART", routes: "/CartPage/CartPage" },
    { name: "CHECKOUT", routes: "/checkout/Checkout" },
    { name: "CONTACT", routes: "/contactUs/ContactUs" },
    { name: "HOME", routes: "/" },
    { name: "MY ACCOUNT", routes: "/login/Login" },
];

const BottomNav = ({ products }) => {
    const route = useRouter();

    // const [linkTo, setLinkTo] = useState("");
    // const handlePages = (page) => {
    //     if (page === "CHECKOUT") {
    //         route.push("/checkout/Checkout");
    //         // setLinkTo('/checkout/Checkout')
    //     }
    //     if (page === "CONTACT") {
    //         route.push("/contactUs/ContactUs");
    //     }
    //     if (page === "HOME") {
    //         route.push("/");
    //     }
    //     if (page === "MY ACCOUNT") {
    //         route.push("/account/AccountPage");
    //     }
    //     if (page === "CART") {
    //         route.push("/CartPage/CartPage");
    //     }
    // };
    return (
        <div className={classes.BottomNavWrapper}>
            <div className={classes.BottomNavLeft}>
                <div>
                    <LocalShippingIcon className={classes.BottomNavIcon} />
                </div>
                <div className={classes.BottomNavLeftText}>SHIPPED VIA PRIORITY MAIL</div>
            </div>
            <div className={classes.BottomNavCenter}>
                <div className={classes.dropdown}>
                    <div>
                        <div className={classes.dropbtn}>
                            Products <KeyboardArrowDownIcon />
                        </div>
                        <div className={classes.dropdownContent}>
                            {/* <a href="#">Product 1</a>
                            <a href="#">Product 2</a>
                            <a href="#">Product 3</a> */}
                            {products?.map((data, i) => (
                                <span key={i}>
                                    <Link href={`/product/${data.id}`}>
                                        <a href="#" key={i}>
                                            {data.name}
                                        </a>
                                    </Link>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* <div className={classes.BottomNavCenterProducts}>
                    Product
                    <KeyboardArrowDownIcon />
                </div>
                <div className={classes.BottomNavCenterCustomers}>
                    Customers
                    <KeyboardArrowDownIcon />
                </div>
                <div>Wholesale</div>
                <div>Reviews</div> */}
                </div>
                <div className={classes.dropdown}>
                    <div>
                        <div className={classes.dropbtn}>
                            Customers <KeyboardArrowDownIcon />
                        </div>
                        <div className={classes.dropdownContentCustomer}>
                            {/* <a href="#">Customer 1</a>
                            <a href="#">Customer 2</a>
                            <a href="#">Customer 3</a> */}
                            {customerData?.map((data, i) => (
                                // <a key={i} onClick={() => handlePages(data)}>
                                //     {data}
                                // </a>
                                <div key={i}>
                                    <Link href={data.routes}>
                                        <a href="#">{data.name}</a>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={classes.dropdown}>
                    <div>
                        <Link href="/wholesale">
                            <div className={classes.dropbtn}>Wholesale</div>
                        </Link>
                        {/* <div className={classes.dropdownContent}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div> */}
                    </div>
                </div>
                <div className={classes.dropdown}>
                    <div>
                        <Link href="/reviewss/Reviews">
                            <div className={classes.dropbtn}>Reviews</div>
                        </Link>
                        {/* <div className={classes.dropdownContent}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className={classes.BottomNavRight}>
                <div>
                    <LocalPhoneIcon className={classes.BottomNavIcon} />
                </div>
                <div className={classes.BottomNavRightText}>(407) 801-1596 | M-F 9AM-5PM EST | 24/7 TEXT</div>
                {/* <div>
                    <LocalPhoneIcon className={classes.BottomNavIcon} />
                </div> */}
            </div>
        </div>
    );
};

export default BottomNav;
