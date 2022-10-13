import { Drawer, Button } from "antd";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "antd/dist/antd.css";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SideDrawer.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";
import Link from "next/link";
import CartDrawer from "../cartDrawer/CartDrawer";
import { Badge, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

var customerData = [
    // { name: "CERAMIC CARTRIDGES" },
    { name: "CART" },
    { name: "CHECKOUT" },
    { name: "CONTACT" },
    { name: "HOME" },
    { name: "MY ACCOUNT" },
];
const SideDrawer = ({ products }) => {
    const cart = useSelector((state) => state.cartReducer.cart);
    const route = useRouter();
    const [visible, setVisible] = useState(false);
    const [openProduct, setOpenProduct] = useState(false);
    const [openCustomer, setOpenCustomer] = useState(false);
    const handleProduct = () => {
        if (openProduct === false) {
            setOpenProduct(true);
        } else {
            setOpenProduct(false);
        }
    };
    const handleCustomers = () => {
        if (openCustomer === false) {
            setOpenCustomer(true);
        } else {
            setOpenCustomer(false);
        }
    };
    const showDrawer = () => {
        setVisible(true);
        // route.push("/cartMobile/CartMobile");
    };

    const onClose = () => {
        setVisible(false);
    };

    const handlePages = (page) => {
        if (page === "CHECKOUT") {
            route.push("/checkout/Checkout");
        }
        if (page === "CONTACT") {
            route.push("/contactUs/ContactUs");
        }
        if (page === "HOME") {
            route.push("/");
        }
        if (page === "MY ACCOUNT") {
            route.push("/account/AccountPage");
        }
        if (page === "CART") {
            route.push("/CartPage/CartPage");
        }
    };

    const handleCartIcon = () => {
        route.push("/cartMobile/CartMobile");
        setVisible(false);
    };
    const handleLoginIcon = () => {
        route.push("/login/Login");
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer} style={{ backgroundColor: "transparent", border: "none" }}>
                <MenuIcon style={{ color: "white", backgroundColor: "transparent", color: "#fff" }} />
            </Button>
            <Drawer placement="right" onClose={onClose} visible={visible} closeable={"true"}>
                <div>
                    {/* <CartDrawer /> */}
                    {/* <div className={classes.SideDrawerSearchWrapper}>
                        <input placeholder="Search..." className={classes.SideDrawerInput} />
                        <div className={classes.SideDrawerSearchIcon}>
                            <SearchIcon />
                        </div>
                    </div> */}
                    <div className={classes.SideDrawerIconWrap}>
                        <PersonOutlineIcon className={classes.iconStylesLogin} onClick={handleLoginIcon} />
                        {/* <FavoriteBorderIcon className={classes.iconStylesLikes} /> */}
                        <Badge color="primary" badgeContent={cart.length === 0 ? "0" : cart.length}>
                            <AddShoppingCartIcon onClick={handleCartIcon} className={classes.iconStylesCart} />
                        </Badge>
                        {/* <AddShoppingCartIcon className={classes.iconStylesCart} onClick={() => route.push("/cartMobile/CartMobile")} /> */}
                    </div>
                    <div className={classes.sideDrawerOptionsWrap}>
                        <div>
                            <div className={classes.sideDrawerProducts} onClick={() => handleProduct(true)}>
                                <div>Products</div>
                                <KeyboardArrowDownIcon />
                            </div>
                            {openProduct === false ? (
                                <ul className={classes.sideDrawerProductsCont}>
                                    {/* <li>product 1</li>
                                <li>product 2</li>
                                <li>product 3</li>
                                <li>product 4</li> */}
                                </ul>
                            ) : (
                                <ul className={classes.sideDrawerProductsShow}>
                                    {products.map((product, i) => (
                                        <>
                                            <Link href={`/product/${product.id}`}>
                                                <li key={i}>{product.name}</li>
                                            </Link>
                                        </>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div>
                            <div className={classes.sideDrawerCustomers} onClick={() => handleCustomers(true)}>
                                <div>Customers</div>
                                <KeyboardArrowDownIcon />
                            </div>
                            {openCustomer === false ? (
                                <ul className={classes.sideDrawerCustomersCont}>
                                    {/* <li>Customer 1</li>
                                <li>Customer 2</li>
                                <li>Customer 3</li>
                                <li>Customer 4</li> */}
                                </ul>
                            ) : (
                                <ul className={classes.sideDrawerCustomersShow}>
                                    {customerData.map((data, i) => (
                                        <li key={i} onClick={() => handlePages(data.name)}>
                                            {data.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className={classes.sideDrawerWholesale} onClick={() => route.push("/wholesale")}>
                            Wholesale
                        </div>
                        <div className={classes.sideDrawerReviews} onClick={() => route.push("/reviewss/Reviews")}>
                            Reviews
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default SideDrawer;
