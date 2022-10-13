import classes from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "../sideDrawer/SideDrawer";
import CartDrawer from "../cartDrawer/CartDrawer";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = ({ products }) => {
    const route = useRouter();
    return (
        <div className={classes.navContainer}>
            <div className={classes.logoDiv}>
                <img
                    onClick={() => route.push("/")}
                    src="https://i0.wp.com/www.fatpuffwholesale.com/wp-content/uploads/2020/05/fatpuff-logo-@3x.png?resize=1536%2C707&ssl=1"
                    className={classes.logoImg}
                />
            </div>
            <div className={classes.navSearchWrapper}>
                {/* <div className={classes.navSearchWrapperinner}>
                    <div>
                        <input type="text" placeholder="Search..." className={classes.navInput} />
                    </div>
                    <div className={classes.inputBtn}>
                        <SearchIcon className={classes.iconStyles} />
                    </div>
                </div> */}
                <div className={classes.navbarHeading}>COME GET IT</div>
            </div>
            {/* <div className={classes.navbarHeading}>Get Vapes At Fat Puff</div> */}
            <div className={classes.navButtonsWrapper}>
                <div className={classes.navButtonsWrapperInner}>
                    <Link href="/login/Login">
                        <PersonOutlineIcon className={classes.iconStyles} />
                    </Link>
                    {/* <FavoriteBorderIcon className={classes.iconStyles} /> */}
                    {/* <AddShoppingCartIcon className={classes.iconStyles} /> */}
                    <CartDrawer />
                </div>
            </div>
            <div className={classes.hamburgerIcon}>
                {/* <MenuIcon /> */}
                <SideDrawer products={products} />
            </div>
        </div>
    );
};

export default Navbar;
