import classes from "./AccountPage.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { getUser, updateUser } from "../../src/redux/actions/authActions";
import ShippingForm from "../../src/components/shippingForm/ShippingForm";
import BillingForm from "../../src/components/billingForm/BillingForm";
import ThankComp from "../../src/components/thankComp/ThankComp";
import OrderList from "../../src/components/orderList/OrderList";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const AccountPage = () => {
    const route = useRouter();
    const [optionCheck, setOptionCheck] = useState("Dashboard");
    const [user, setUser] = useState(null);
    const [formsAdd, setFormsAdd] = useState("");
    const [orderData, setOrderData] = useState([]);
    const [showThank, setShowThank] = useState(false);
    const [thankData, setThankData] = useState(null);
    const [loading, setLoading] = useState(false);

    const gettingOrder = async () => {
        const userID = localStorage.getItem("user");
        const res = await axios.get(
            `https://www.fatpuffwholesale.com/wp-json/wc/v2/orders?customer=${userID}&consumer_key=ck_aaac40ce93cf8dc904258b5c63c6a4f0a91c4799&consumer_secret=cs_5dda821a2d4f3ccca351129d11512e1383ddcc5d`,
        );
        setOrderData(res);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) route.push("/login/Login");
        const fetchUser = async () => {
            const response = await getUser();

            setUser(response);
        };

        fetchUser();
        gettingOrder();
    }, []);
    const handleUpdateUserDetails = async () => {
        setLoading(true);
        const res = await updateUser(user);
        setLoading(false);
    };

    return (
        <div className={classes.accountPageWrapper}>
            <h1>My Account</h1>
            <h3 className={classes.showPage}>{`${optionCheck} ${"Screen"}`}</h3>
            <div className={classes.innerWrapper}>
                <div className={classes.optionsWrapper}>
                    <div onClick={() => setOptionCheck("Dashboard")} className={optionCheck === "Dashboard" && classes.optionSelect}>
                        Dashboard
                    </div>
                    <div onClick={() => setOptionCheck("Order")} className={optionCheck === "Order" && classes.optionSelect}>
                        Orders
                    </div>
                    <div onClick={() => setOptionCheck("Download")} className={optionCheck === "Download" && classes.optionSelect}>
                        Downloads
                    </div>
                    <div onClick={() => setOptionCheck("Address")} className={optionCheck === "Address" && classes.optionSelect}>
                        Addresses
                    </div>
                    <div
                        onClick={() => setOptionCheck("AccountDetails")}
                        className={optionCheck === "AccountDetails" && classes.optionSelect}
                    >
                        Account Details
                    </div>
                    <div onClick={() => setOptionCheck("Coupon")} className={optionCheck === "Coupon" && classes.optionSelect}>
                        My Coupons
                    </div>
                    <div
                        onClick={() => {
                            route.push("/login/Login");
                            localStorage.removeItem("token");
                            localStorage.removeItem("user");
                        }}
                    >
                        Logout
                    </div>
                </div>

                <div className={classes.optionsContent}>
                    {optionCheck === "Dashboard" && (
                        <div className={classes.forDashboard}>
                            <div>
                                Hello {user?.username} (not <span>{user?.username}</span>?{" "}
                                <span
                                    onClick={() => {
                                        route.push("/login/Login");
                                        localStorage.removeItem("token");
                                    }}
                                >
                                    Logout
                                </span>
                                )
                            </div>
                            <div>
                                From your account dashboard you can view your <span>recent orders</span>, manage your{" "}
                                <span>shipping and billing addresses</span>, and <span>edit your password and account details</span>.
                            </div>
                        </div>
                    )}
                    {optionCheck === "Order" &&
                        (orderData?.data?.length !== 0 ? (
                            // <ThankComp orderData={orderData} />
                            !showThank ? (
                                <OrderList orderData={orderData} setShowThank={setShowThank} setThankData={setThankData} />
                            ) : (
                                <ThankComp thankData={thankData && thankData} setShowThank={setShowThank} />
                            )
                        ) : (
                            <div className={classes.forOrders}>
                                <div>
                                    <div className={classes.orderText}>No Product has been made yet</div>
                                </div>
                                <div>
                                    <div className={classes.orderBtn}>Browse products</div>
                                </div>
                            </div>
                        ))}

                    {optionCheck === "Download" && (
                        <div className={classes.forDownloads}>
                            <div>
                                <div className={classes.downloadText}>No downloads available yet</div>
                            </div>
                            <div>
                                <div className={classes.downloadBtn} onClick={() => route.push("/")}>
                                    Browse products
                                </div>
                            </div>
                        </div>
                    )}
                    {optionCheck === "Address" && (
                        <div className={classes.forAddresses}>
                            <div>
                                <h2 className={classes.addressHeading}>
                                    The following addresses will be used on the checkout page by default.
                                </h2>
                            </div>
                            <div className={classes.addressBoxContainer}>
                                <div className={classes.addressBox}>
                                    <div className={classes.addressBoxTop}>
                                        <div>Billing address</div>
                                        <div>
                                            <span onClick={() => setFormsAdd("bill")}>Add</span>
                                        </div>
                                    </div>
                                    <div className={classes.addressBoxBottom}>You have not set up this type of address yet.</div>
                                </div>
                                <div className={classes.addressBox}>
                                    <div className={classes.addressBoxTop}>
                                        <div>Shipping address</div>
                                        <div>
                                            <span onClick={() => setFormsAdd("ship")}>Add</span>
                                        </div>
                                    </div>
                                    <div className={classes.addressBoxBottom}>You have not set up this type of address yet.</div>
                                </div>
                            </div>
                            {formsAdd === "bill" && (
                                <BillingForm billing={user?.billing} setUser={setUser} updateUser={handleUpdateUserDetails} />
                            )}
                            {formsAdd === "ship" && (
                                <ShippingForm shipping={user?.shipping} setUser={setUser} updateUser={handleUpdateUserDetails} />
                            )}
                        </div>
                    )}
                    {optionCheck === "AccountDetails" && (
                        <div className={classes.forAccDetail}>
                            <div className={classes.accNamesWrap}>
                                <div>
                                    <div>
                                        <div>First Name</div>
                                        <div>
                                            <input
                                                value={user?.first_name}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        first_name: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div>Last Name</div>
                                        <div>
                                            <input
                                                value={user?.last_name}
                                                onChange={(e) =>
                                                    setUser((prev) => ({
                                                        ...prev,
                                                        last_name: e.target.value,
                                                    }))
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>Display Name</div>
                                    <div>
                                        <input
                                            value={user?.username}
                                            onChange={(e) =>
                                                setUser((prev) => ({
                                                    ...prev,
                                                    username: e.target.value,
                                                }))
                                            }
                                        />
                                    </div>
                                    <div>
                                        <i>This will be how your name will be displayed in the account section and in reviews</i>
                                    </div>
                                </div>
                                <div>
                                    <div>Email Address</div>
                                    <div>
                                        <input
                                            type="email"
                                            value={user?.email}
                                            onChange={(e) =>
                                                setUser((prev) => ({
                                                    ...prev,
                                                    email: e.target.value,
                                                }))
                                            }
                                        />
                                    </div>
                                </div>
                                <h2>Password change</h2>
                                <div>
                                    <div>
                                        <div>Current password (leave blank to leave unchanged)</div>
                                        <div>
                                            <input type="email" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>New password (leave blank to leave unchanged)</div>
                                        <div>
                                            <input type="email" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>Confirm new password</div>
                                        <div>
                                            <input type="email" />
                                        </div>
                                    </div>
                                    {loading ? (
                                        <div className={classes.accDetailBtn}>
                                            <CircularProgress />
                                        </div>
                                    ) : (
                                        <div className={classes.accDetailBtn} onClick={handleUpdateUserDetails}>
                                            Save changes
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {optionCheck === "Coupon" && (
                        <div className={classes.forCoupon}>
                            <h2>Available Coupons</h2>
                            <h2>Used / Expired Coupons</h2>
                            <div className={classes.forCouponInner}>
                                <h3>$120 Cart Discount</h3>
                                <p>cameron120</p>
                                <h3>Expired</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
