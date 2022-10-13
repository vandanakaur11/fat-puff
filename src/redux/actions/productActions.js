import { attachHeaders, publicAPI } from "../../utils";

export const getProducts = async (payload) => {
    // return async (dispatch) => {
    //   console.log(payload);
    // };
    try {
        const getApi = await attachHeaders("products");
        const products = await publicAPI.get(getApi);
        return products?.data;
    } catch (err) {
        console.log(err);
    }
};
