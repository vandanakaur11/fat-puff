import Head from "next/head";
import BottomNav from "../components/bottomnav/BottomNav";
import Navbar from "../components/navbar/Navbar";
import Warn from "../components/Warn/Warn";
import classes from "./Layout.module.css";
import Footer from "../components/footer/Footer";
import FooterBottom from "../components/footerBottom/FooterBottom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState(null);
    useEffect(async () => {
        // dispatch(getProducts());
        const products = await getProducts();
        setProducts(products && products);
    }, []);
    return (
        <>
            <Head>
                <title>FAT PUFF</title>
                <link
                    rel="icon"
                    href="https://i0.wp.com/www.fatpuffwholesale.com/wp-content/uploads/2020/05/fatpuff-logo-@3x.png?w=1971&ssl=1"
                />
            </Head>
            <div className={classes.layout}>
                <Warn />
                <Navbar products={products} />
                <BottomNav products={products} />
                <main>{children}</main>
                <Footer />
                <FooterBottom />
            </div>
        </>
    );
};

export default Layout;
