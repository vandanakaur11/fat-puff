import axios from "axios";
import Swal from "sweetalert2";
import {
  attachHeaders,
  getUserOrderUrl,
  getUserUrl,
  publicAPI,
  setRegister,
} from "../../utils";

export const login = async (payload) => {
  try {
    const res = await axios.post(
      `https://www.fatpuffwholesale.com/?rest_route=/login/v1/auth`,
      payload
    );
    if (res?.data) {
      const verify = await axios.get(
        `https://www.fatpuffwholesale.com/?rest_route=/login/v1/auth/validate`,
        { headers: { Authorization: `Bearer ${res?.data?.data?.jwt}` } }
      );
      if (verify?.status) {
        localStorage.setItem("token", res.data.data.jwt);
        localStorage.setItem("user", verify?.data?.data?.user?.ID);
        Swal.fire({
          title: "Login Success!",
          icon: "success",
        });
        return true;
      } else {
        Swal.fire({
          title: "Authentication Failed!",
          icon: "error",
        });
      }
    }
  } catch (err) {
    console.log(err?.response?.data?.message);
    Swal.fire({
      title: "Invalid Credentials!",
      icon: "error",
    });
  }
};

export const register = async (payload) => {
  try {
    const regUrl = await setRegister("customers");

    const res = await publicAPI.post(regUrl, payload);
    console.log(res.data);
    Swal.fire({
      text: `Registered Success`,
      icon: "success",
    });
  } catch (error) {
    console.log(error?.response?.data?.message);
    Swal.fire({
      text: `${error?.response?.data?.message?.replace(/(<([^>]+)>)/gi, "")}`,
      icon: "error",
    });
  }
};
export const getUser = async (payload) => {
  try {
    let userId = localStorage.getItem("user");

    const userApi = await getUserUrl(userId);
    console.log(userApi);

    const res = await publicAPI.get(userApi);
    return res?.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
export const getUserOrders = async (payload) => {
  try {
    let userId = localStorage.getItem("user");

    const orderApi = await getUserOrderUrl(userId);
    console.log(orderApi);

    const res = await publicAPI.get(orderApi);
    return res?.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
export const updateUser = async (payload) => {
  try {
    let userId = localStorage.getItem("user");

    const userApi = await getUserUrl(userId);
    console.log(userApi);

    const { data } = await publicAPI.put(userApi, payload);
    Swal.fire({
      title: "Account Updated Successfuly",
      icon: "success",
    });
    return data;
  } catch (error) {
    Swal.fire({
      title: "Server Error",
      icon: "error",
    });
    console.log(error?.response?.data?.message);
  }
};
