// import { publicAPI } from "../../API";

import axios from "axios";
import Swal from "sweetalert2";
import { ADD_TO_CART, DELETE, UPDATE_PRICE } from "../types/cartTypes";

export const addToCart = (payload, inCart) => {
    return async (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            payload: { item: payload, inCart },
        });
    };
};
export const removeItem = (index) => {
    return async (dispatch) => {
        dispatch({
            type: DELETE,
            payload: index,
        });
    };
};
export const updateTotal = (payload) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_PRICE,
            payload: payload,
        });
    };
};
export const placeOrder = async (payload, payload2) => {
    try {
        let newPayload;
        console.log(payload, "pay");
        const res = await axios.post(
            // `https://apitest.authorize.net/xml/v1/request.api`,
            `https://api.authorize.net/xml/v1/request.api`,
            payload,
        );
        if (res?.data?.transactionResponse.responseCode === "1") {
            console.log("check", res);
            newPayload = { ...payload2, set_paid: true };
            const generateOrder = await axios.post(
                `https://www.fatpuffwholesale.com/wp-json/wc/v3/orders/?consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.secret_key}`,
                newPayload,
            );

            if (generateOrder?.data) {
                Swal.fire({
                    title: "Order Placed Successful",
                    text: "Thanks For Your Order",
                    icon: "success",
                });
            }
        } else {
            console.log("checkElse");
            newPayload = { ...payload2, set_paid: false };
            const generateOrder = await axios.post(
                `https://www.fatpuffwholesale.com/wp-json/wc/v3/orders/?consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.secret_key}`,
                newPayload,
            );

            Swal.fire({
                title: "Payment Gateway Error!",
                // text: res?.messages.message[0].text,
                icon: "error",
            });
        }

        console.log(res.data, "resData");
    } catch (err) {
        console.log(err?.response?.data?.message, "err");
        // Swal.fire("", err?.response?.data?.message || "Server Error", "error");
    }
};
