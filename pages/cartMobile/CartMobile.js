import { Drawer, Typography, Empty } from "antd";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import classes from "./CartMobile.module.css";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge, Divider, Button } from "@mui/material";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../src/redux";
import CartItem from "../../src/components/cartItem/CartItem";

function CartMobile() {
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const [total, setTotal] = useState(0);
    // const [cart, setCart] = useState([]);
    const route = useRouter();
    const dispatch = useDispatch();
    // const cartArray = useSelector((state) => state.cartReducer.cart);
    const cart = useSelector((state) => state.cartReducer.cart);

    // useEffect(() => {
    //   const localCart = JSON.parse(localStorage.getItem("cart"));
    //   console.log(localCart);
    //   if (localCart === null || localCart.length === 0) {
    //     setCart(cartArray);
    //   } else {
    //     setCart(localCart);
    //   }
    // }, [cartArray]);

    useEffect(() => {
        let totalPriceArray = [];

        cart?.map((item, i) => {
            totalPriceArray.push(item?.quantity * Number(item?.price));
        });
        let subtotal = totalPriceArray.reduce((a, b) => a + b, 0);
        setTotal(subtotal);
    }, [cart]);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Typography.Title className={classes.heading}>Cart</Typography.Title>
            <div className={classes.cartMobileItems}>
                {cart?.map((item, i) => (
                    <span key={i}>
                        <CartItem item={item} index={i} />
                    </span>
                ))}
                {cart?.length !== 0 && (
                    <>
                        <div className={classes.subTotal}>
                            <Divider />
                            <h1>Subtotal : ${total}</h1>
                            <Divider />
                        </div>
                    </>
                )}
                <div className={classes.routeBtn}>
                    <Button variant="contained" onClick={() => route.push("/CartPage/CartPage")}>
                        View Cart
                    </Button>
                    {cart.length !== 0 ? (
                        <Button variant="contained" onClick={() => route.push("/checkout/Checkout")}>
                            Checkout
                        </Button>
                    ) : (
                        <Button variant="contained" disabled onClick={() => route.push("/checkout/Checkout")}>
                            Checkout
                        </Button>
                    )}
                </div>

                {cart.length === 0 && <Empty description={"Cart Is Empty"} />}
            </div>
        </>
    );
}

export default CartMobile;
