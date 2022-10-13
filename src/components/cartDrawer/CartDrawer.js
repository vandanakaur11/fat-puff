import { Drawer, Typography, Empty } from "antd";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import classes from "./CartDrawer.module.css";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge, Divider, Button } from "@mui/material";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux";
import CartItem from "../cartItem/CartItem";
const CartDrawer = () => {
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
        <div className={classes.cartMain}>
            <Badge color="primary" badgeContent={cart.length === 0 ? "0" : cart.length}>
                <AddShoppingCartIcon onClick={showDrawer} className={classes.iconStylesLogin} />
            </Badge>

            <Drawer placement="right" onClose={onClose} visible={visible} closeIcon={true}>
                <Typography.Title>Cart</Typography.Title>
                <div>
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
                        {/* <Button variant="contained" onClick={() => route.push("/checkout/Checkout")}>
                            Checkout
                        </Button> */}
                        {cart.length !== 0 ? (
                            <Button variant="contained" onClick={() => route.push("/checkout/Checkout")}>
                                Checkout
                            </Button>
                        ) : (
                            <Button variant="contained" onClick={() => route.push("/checkout/Checkout")} disabled>
                                Checkout
                            </Button>
                        )}
                    </div>

                    {cart.length === 0 && <Empty description={"Cart Is Empty"} />}
                </div>
            </Drawer>
        </div>
    );
};

export default CartDrawer;
