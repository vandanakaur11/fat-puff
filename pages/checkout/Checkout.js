import React, { useEffect, useState } from "react";
import classes from "./Checkout.module.css";
import imageList from "../../src/images/imageList.png";
import Image from "next/image";
import coinImage from "../../src/images/coinImage.png";
import { CircularProgress, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useSelector } from "react-redux";
import { placeOrder } from "../../src/redux/actions/cartActions";
import Swal from "sweetalert2";
import PaymentCard from "../../src/components/paymentCard/PaymentCard";
import axios from "axios";
import { Select } from "antd";
import Link from "next/link";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { getUser } from "../../src/redux/actions/authActions";

function Checkout() {
    const route = useRouter();
    const { Option } = Select;

    const cart = useSelector((state) => state.cartReducer.cart);
    const [shipRate, setShipRate] = useState(20);
    const [coinPayments, setCoinPayments] = useState(100);
    const [total, setTotal] = useState(0);

    const [couponCode, setCouponCode] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [country, setCountry] = useState("");
    const [streetAddName, setStreetAddName] = useState("");
    const [streetAddApartment, setStreetAddApartment] = useState("");
    const [town, setTown] = useState("");
    const [stateName, setStateName] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subscribe, setSubscribe] = useState(false);
    const [accUsername, setAccUsername] = useState("");
    const [createAccPassword, setCreateAccPassword] = useState("");
    const [shipToAddress, setShipToAddress] = useState(false);
    const [fnameShip, setFnameShip] = useState("");
    const [lnameShip, setLnameShip] = useState("");
    const [companyNameShip, setCompanyNameShip] = useState("");
    const [countryShip, setCountryShip] = useState("");
    const [streetAddNameShip, setStreetAddNameShip] = useState("");
    const [streetAddApartmentShip, setStreetAddApartmentShip] = useState("");
    const [townShip, setTownShip] = useState("");
    const [stateNameShip, setStateNameShip] = useState("");
    const [zipcodeShip, setZipcodeShip] = useState("");
    const [phoneShip, setPhoneShip] = useState("");
    const [orderNotes, setOrderNotes] = useState("");

    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cardCode, setCardCode] = useState("");
    const [termsNconditions, setTermsNcondtions] = useState(false);
    const [countryData, setCountriesData] = [];

    const [fNameRequire, setFnameRequire] = useState(false);
    const [lNameRequire, setLnameRequire] = useState(false);
    const [countryRequire, setCountryRequire] = useState(false);
    const [streetAddNameRequire, setStreetAddNameRequire] = useState(false);
    const [streetAddApartRequire, setStreetAddApartRequire] = useState(false);
    const [townRequire, setTownRequire] = useState(false);
    const [stateRequire, setStateRequire] = useState(false);
    const [zipcodeRequire, setZipcodeRequire] = useState(false);
    const [modifiedCart, setModifiedCart] = useState(null);
    const [orderLoading, setOrderLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [isCardValid, setIsCardValid] = useState(false);
    const [cardData, setCardData] = useState({
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    });

    useEffect(() => {
        let totalPriceArray = [];
        let payloadForCart = [];

        cart?.map((item, i) => {
            totalPriceArray.push(item?.quantity * Number(item?.price));
            payloadForCart.push({
                product_id: item?.productId,
                variation_id: item?.id,
                quantity: item?.quantity,
            });
        });
        setModifiedCart(payloadForCart);

        let subtotal = totalPriceArray.reduce((a, b) => a + b, 0);
        setTotal(subtotal);
        const getFetchUser = async () => {
            const res = await getUser();
            setUser(res);
            console.log(res);
        };
        getFetchUser();
    }, [cart]);

    useEffect(() => {
        getCountryData();
        // getUserData();
    }, []);

    async function getCountryData() {
        try {
            const countryData = await axios.get(
                "https://www.fatpuffwholesale.com/wp-json/wc/v3/settings/general/woocommerce_specific_allowed_countries?consumer_key=ck_aaac40ce93cf8dc904258b5c63c6a4f0a91c4799&consumer_secret=cs_5dda821a2d4f3ccca351129d11512e1383ddcc5d",
            );

            setCountriesData(countryData);
        } catch (e) {
            console.log(e);
        }
    }
    // async function getUserData() {
    //   try {
    //     const res = await getUser();
    //     setUser(res && res);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }

    var stateList = [
        { name: "Alabama" },
        { name: "Alaska" },
        { name: "Arizona" },
        { name: "Arkansas" },
        { name: "Calafornia" },
        { name: "Colarado" },
        { name: "Connecticut" },
        { name: "Delaware" },
        { name: "District of Columbia" },
        { name: "Florida" },
    ];
    var countryList = ["Albania", "American Samoa", "Australia", "United Kingdom (UK)", "United States (US)"];

    const handlePlaceOrder = async () => {
        setOrderLoading(true);
        const payload = {
            createTransactionRequest: {
                merchantAuthentication: {
                    // name: "97YkSJq2W",
                    // transactionKey: "6635yaB4k88HjGfg",
                    name: "4D2rK2wRCu",
                    transactionKey: "44Af3u5U27AjB8Tm",
                },
                refId: "123456",
                transactionRequest: {
                    transactionType: "authCaptureTransaction",
                    amount: total + shipRate,
                    payment: {
                        creditCard: {
                            cardNumber: cardData.number.replace(/\s+/g, ""),
                            expirationDate: cardData.expiry,
                            cardCode: cardData.cvc,
                        },
                    },

                    billTo: {
                        firstName: fname,
                        lastName: lname,
                        company: companyName,
                        address: `${streetAddName} ${streetAddApartment}`,
                        city: town,
                        // state: "TX",
                        state: stateName,
                        zip: zipcode,
                        // country: "US",
                        country: country,
                    },
                    //   shipTo: {
                    //     firstName: fnameShip,
                    //     lastName: lnameShip,
                    //     company: companyNameShip,
                    //     address: shipToAddress,
                    //     city: townShip,
                    //     state: "TX",
                    //     zip: zipcodeShip,
                    //     country: "US",
                    //   },

                    customerIP: "192.168.1.2",

                    processingOptions: {
                        isSubsequentAuth: "true",
                    },
                    subsequentAuthInformation: {
                        originalNetworkTransId: "123456789NNNH",
                        originalAuthAmount: total + shipRate,
                        reason: "resubmission",
                    },
                    authorizationIndicatorType: {
                        authorizationIndicator: "final",
                    },
                },
            },
        };
        const payload2 = {
            payment_method: "authnet",
            payment_method_title: "Debit or Credit card",
            set_paid: true,
            customer_id: user?.id ? user?.id : 0,
            billing: {
                first_name: fname,
                last_name: lname,
                address_1: streetAddName,
                address_2: streetAddApartment,
                city: town,
                // state: "TX",
                state: stateName,

                // postcode: "94103",
                postcode: zipcode,
                // country: "US",
                country: country,
                email: email,
                phone: phone,
            },

            shipping: shipToAddress
                ? {
                      first_name: fnameShip,
                      last_name: lnameShip,
                      address_1: streetAddNameShip,
                      address_2: streetAddApartmentShip,
                      city: townShip,
                      state: stateNameShip,
                      // state: "TX",
                      postcode: zipcodeShip,
                      // country: "US",
                      country: countryShip,
                      phone: phoneShip,
                  }
                : {
                      first_name: fname,
                      last_name: lname,
                      address_1: streetAddName,
                      address_2: streetAddApartment,
                      city: town,
                      // state: "TX",
                      state: stateName,

                      // postcode: "94103",
                      postcode: zipcode,
                      // country: "US",
                      country: country,
                      email: email,
                      phone: phone,
                  },
            line_items: modifiedCart,
            shipping_lines: [
                {
                    method_id: "flat_rate",
                    method_title: "Flat Rate",
                    total: shipRate.toString(),
                },
            ],
        };

        const res = await placeOrder(payload, payload2);
        setOrderLoading(false);

        //  else {
        //   Swal.fire({
        //     title: "Order placed Successfuly",
        //     text: "Thanks For Your Order",
        //     icon: "success",
        //   });
        // }
    };
    const placeOrderValid = async () => {
        if (fname !== "" && lname !== "" && streetAddName !== "" && streetAddApartment !== "" && zipcode !== "" && town !== "") {
            if (isCardValid) {
                handlePlaceOrder();
            } else {
                Swal.fire({
                    title: "invalid card number",
                    icon: "error",
                });
            }
        } else {
            window.scrollTo(0, 0);
        }

        if (fname === "") {
            setFnameRequire(true);
        } else {
            setFnameRequire(false);
        }

        if (lname === "") {
            setLnameRequire(true);
        } else {
            setLnameRequire(false);
        }
        if (country === "") {
            setCountryRequire(true);
        } else {
            setCountryRequire(false);
        }
        if (streetAddName === "") {
            setStreetAddNameRequire(true);
        } else {
            setStreetAddNameRequire(false);
        }
        if (streetAddApartment === "") {
            setStreetAddApartRequire(true);
        } else {
            setStreetAddApartRequire(false);
        }
        if (town === "") {
            setTownRequire(true);
        } else {
            setTownRequire(false);
        }
        if (stateName === "") {
            setStateRequire(true);
        } else {
            setStateRequire(false);
        }
        if (zipcode === "") {
            setZipcodeRequire(true);
        } else {
            setZipcodeRequire(false);
        }
        // window.scrollTo(0, 0);
        // const payload2 = {

        // }
    };
    const [showCoupon, setShowCoupon] = useState(false);
    const handleCoupon = () => {
        if (showCoupon === false) {
            setShowCoupon(true);
        } else {
            setShowCoupon(false);
        }
    };

    return (
        <div className={classes.checkoutWrapper}>
            <h1 className={classes.mainHeading}>Checkout</h1>
            <div className={classes.questionDiv}>
                <h2>
                    Have a coupon? <span onClick={() => handleCoupon()}> Click here to enter your code </span>
                </h2>
            </div>
            {showCoupon && (
                <div className={classes.couponContainer}>
                    <h2>If you have a coupon code, please apply it below.</h2>
                    <div className={classes.couponWrapper}>
                        <input placeholder="Coupon code" onChange={(e) => setCouponCode(e.target.value)} />
                        <button>Apply coupon</button>
                    </div>
                </div>
            )}

            <div className={classes.bottomWrap}>
                <div className={classes.bottomWrapLeft}>
                    <h2>Billing Details</h2>
                    <div className={classes.namesWrap}>
                        <div>
                            <h3>First name</h3>
                            <input onChange={(e) => setFname(e.target.value)} />
                            {fNameRequire && <h5 className={classes.warningMsg}>This feild is required</h5>}
                        </div>
                        <div>
                            <h3>Last name</h3>
                            <input onChange={(e) => setLname(e.target.value)} />
                            {lNameRequire && <h5 className={classes.warningMsg}>This feild is required</h5>}
                        </div>
                    </div>
                    <div className={classes.companynameWrapMultiple}>
                        <h3>Company name (optional)</h3>
                        <input onChange={(e) => setCompanyName(e.target.value)} />
                    </div>
                    <div className={classes.countrynameWrap}>
                        <h3>Country / Region </h3>
                        {/* <select onChange={(e) => e.target.value}>
              {countryList.map((val, i) => (
                <option value={val} key={i}>
                  {val.name}
                </option>
              ))}
            </select> */}
                        <Select style={{ width: "100%" }} onChange={(value) => setCountry(value)}>
                            {countryList.map((val, i) => (
                                <Option key={i} value={val}>
                                    {val}
                                </Option>
                            ))}
                        </Select>
                        {countryRequire && <h5 className={classes.warningMsg}>This feild is required</h5>}
                    </div>
                    <div className={classes.streetaddressWrap}>
                        <h3>Street address</h3>
                        <input placeholder="House number and street name" onChange={(e) => setStreetAddName(e.target.value)} />
                        <input
                            placeholder="Apartment, suit, unit, etc. (optional)"
                            onChange={(e) => setStreetAddApartment(e.target.value)}
                        />
                        {streetAddNameRequire && streetAddApartRequire && <h5 className={classes.warningMsg}>This feild is required</h5>}
                    </div>
                    <div className={classes.companynameWrapMultiple}>
                        <h3>Town / City</h3>
                        <input onChange={(e) => setTown(e.target.value)} />
                        {townRequire && <h5 className={classes.warningMsg}>This feild is required</h5>}
                    </div>
                    <div className={classes.statenameWrap}>
                        <h3>State </h3>
                        {/* <select>
              {stateList.map((val, i) => (
                <option key={i} value="">
                  {val.name}
                </option>
              ))}
            </select> */}{" "}
                        <input onChange={(e) => setStateName(e.target.value)} />
                        {stateRequire && <h5 className={classes.warningMsg}>This feild is required</h5>}
                    </div>
                    <div className={classes.companynameWrapMultiple}>
                        <h3>Zip Code</h3>
                        <input onChange={(e) => setZipcode(e.target.value)} />
                        {zipcodeRequire && <h5 className={classes.warningMsg}>This feild is required</h5>}
                    </div>
                    <div className={classes.companynameWrapMultiple}>
                        <h3>Phone</h3>
                        <input onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className={classes.companynameWrapMultiple}>
                        <h3>Email address</h3>
                        <input onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={classes.subscribeWrap}>
                        <input type="checkbox" defaultChecked={subscribe} onChange={(e) => setSubscribe(!subscribe)} />
                        <h3>Subscribe to our newsletter</h3>
                    </div>

                    {!user ? (
                        <>
                            <div className={classes.companynameWrapMultiple}>
                                <h3>Account username</h3>
                                <input onChange={(e) => setAccUsername(e.target.value)} />
                            </div>
                            <div className={classes.companynameWrapMultiple}>
                                <h3>Create account password</h3>
                                <input onChange={(e) => setCreateAccPassword(e.target.value)} />
                            </div>
                        </>
                    ) : (
                        ""
                    )}
                    <div className={classes.shipAddressWrap}>
                        <input type="checkbox" defaultChecked={shipToAddress} onChange={(e) => setShipToAddress(!shipToAddress)} />
                        <h3>Ship to a different address?</h3>
                    </div>
                    {shipToAddress && (
                        <>
                            <div className={classes.namesWrap}>
                                <div>
                                    <h3>First name</h3>
                                    <input name="firstname" onChange={(e) => setFnameShip(e.target.value)} />
                                </div>
                                <div>
                                    <h3>Last name</h3>
                                    <input onChange={(e) => setLnameShip(e.target.value)} />
                                </div>
                            </div>
                            <div className={classes.companynameWrapMultiple}>
                                <h3>Company name (optional)</h3>
                                <input onChange={(e) => setCompanyNameShip(e.target.value)} />
                            </div>
                            <div className={classes.countrynameWrap}>
                                <h3>Country / Region </h3>
                                {/* <select onChange={(e) => e.target.value}>
              {countryList.map((val, i) => (
                <option value={val} key={i}>
                  {val.name}
                </option>
              ))}
            </select> */}
                                <Select style={{ width: "100%" }} onChange={(value) => setCountryShip(value)}>
                                    {countryList.map((val, i) => (
                                        <Option key={i} value={val} className={classes.countryInp}>
                                            {val}
                                        </Option>
                                    ))}
                                </Select>
                                {countryRequire && <h5 className={classes.warningMsg}>This feild is required</h5>}
                            </div>
                            <div className={classes.streetaddressWrap}>
                                <h3>Street address</h3>
                                <input placeholder="House number and street name" onChange={(e) => setStreetAddNameShip(e.target.value)} />
                                <input
                                    placeholder="Apartment, suit, unit, etc. (optional)"
                                    onChange={(e) => setStreetAddApartmentShip(e.target.value)}
                                />
                            </div>
                            <div className={classes.companynameWrapMultiple}>
                                <h3>Town / City</h3>
                                <input onChange={(e) => setTownShip(e.target.value)} />
                            </div>
                            <div className={classes.statenameWrap}>
                                <h3>State </h3>
                                {/* <select>
              {stateList.map((val, i) => (
                <option key={i} value="">
                  {val.name}
                </option>
              ))}
            </select> */}{" "}
                                <input onChange={(e) => setStateNameShip(e.target.value)} />
                                {stateRequire && <h5 className={classes.warningMsg}>This feild is required</h5>}
                            </div>
                            <div className={classes.companynameWrapMultiple}>
                                <h3>Zip Code</h3>
                                <input onChange={(e) => setZipcodeShip(e.target.value)} />
                            </div>
                            <div className={classes.companynameWrapMultiple}>
                                <h3>Phone (optional)</h3>
                                <input onChange={(e) => setPhoneShip(e.target.value)} />
                            </div>
                            <div className={classes.orderNotes}>
                                <h3>Order notes (optional)</h3>
                                <textarea name="w3review" rows="4" cols="50"></textarea>
                            </div>
                        </>
                    )}
                </div>
                <div className={classes.bottomWrapRight}>
                    <h2>Your order</h2>
                    <div className={classes.productHeading}>
                        <div>
                            <h3>Product</h3>
                        </div>
                        <div>
                            <h3>Subtotal</h3>
                        </div>
                    </div>
                    {cart?.map((item, i) => (
                        <div className={classes.productDetails} key={i}>
                            <div>
                                <h3>
                                    {item?.name} - <br /> {item?.flavor} × {item?.quantity}
                                </h3>
                            </div>
                            <div>
                                <h2>${item?.quantity * item?.price}</h2>
                            </div>
                        </div>
                    ))}
                    <div className={classes.productSubtotalMultiple}>
                        <div>
                            <h3>Subtotal</h3>
                        </div>
                        <div>
                            <h3>${total}</h3>
                        </div>
                    </div>
                    <div className={classes.shippingOrder}>
                        <div>
                            <h3>Shipping</h3>
                        </div>
                        <div>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="shipping"
                                    defaultValue={20}
                                    value={shipRate}
                                    name="radio-buttons-group"
                                    onChange={(e) => setShipRate(Number(e.target.value))}
                                >
                                    <FormControlLabel value={20} control={<Radio />} label="Ordering 1-3 boxes (2-4 Day Mail): $20.00" />
                                    <FormControlLabel
                                        value={30}
                                        control={<Radio />}
                                        label="Ordering 3-5 boxes (2-4 Day Mail): $30.00"
                                        style={{ padding: "10px 0" }}
                                    />
                                    <FormControlLabel value={40} control={<Radio />} label="Ordering 5-10 boxes (2-4 Day Mail): $40.00" />
                                    <FormControlLabel
                                        value={60}
                                        control={<Radio />}
                                        label="Ordering 10+ boxes (2-4 Day Mail): $60.00"
                                        style={{ padding: "10px 0" }}
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className={classes.productSubtotalMultiple}>
                        <div>
                            <h3>Tax</h3>
                        </div>
                        <div>
                            <h3> $0.00</h3>
                        </div>
                    </div>
                    <div className={classes.productSubtotalMultiple}>
                        <div>
                            <h3>Total</h3>
                        </div>
                        <div>
                            <h3> ${total + shipRate}</h3>
                        </div>
                    </div>
                    <div className={classes.paymentDebitCredit}>
                        {/* <div className={classes.card}>
                            <input type="radio" />

                            <h3>Debit or Credit card</h3>
                        </div>
                        <div>
                            <Image src={imageList} />
                        </div> */}

                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="shipping"
                                defaultValue={100}
                                value={coinPayments}
                                name="radio-buttons-group"
                                onChange={(e) => setCoinPayments(Number(e.target.value))}
                            >
                                <FormControlLabel value={100} control={<Radio />} label="Debit or Credit card" />
                            </RadioGroup>
                        </FormControl>
                        <div>
                            <Image src={imageList} alt="" />
                        </div>
                    </div>
                    {/* <div className={classes.cardBox}>
                        <h3>Pay with your credit card via Authorize.Net.</h3>
                        <div>
                            <h3 className={classes.cardNumber}>Card number</h3>
                            <input onChange={(e) => setCardNumber(e.target.value)} />
                        </div>
                        <div className={classes.cardBoxInner}>
                            <div>
                                <h3>Expiry (MM/YY)</h3>
                                <input onChange={(e) => setExpiryDate(e.target.value)} />
                            </div>
                            <div>
                                <h3>Card code</h3>
                                <input onChange={(e) => setCardCode(e.target.value)} />
                            </div>
                        </div>
                    </div> */}
                    {coinPayments === 100 && (
                        <PaymentCard
                            //   setCardNumber={setCardNumber}
                            //   setExpiryDate={setExpiryDate}
                            //   setCardCode={setCardCode}
                            cardData={cardData}
                            setData={setCardData}
                            setIsCardValid={setIsCardValid}
                        />
                    )}
                    <div className={classes.payment}>
                        <div className={classes.card}>
                            {/* <input type="radio" />

                            <h3> CoinPayments.net</h3> */}
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="shipping"
                                    defaultValue={200}
                                    value={coinPayments}
                                    name="radio-buttons-group"
                                    onChange={(e) => setCoinPayments(Number(e.target.value))}
                                >
                                    <FormControlLabel value={200} control={<Radio />} label="CoinPayments.net" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <Image src={coinImage} alt="" />
                        </div>
                    </div>
                    <h3 className={classes.dataText}>
                        Your personal data will be used to process your order, support your experience throughout this website, and for
                        other purposes described in our{" "}
                        <span onClick={() => route.push("/privacyPolicy/PrivacyPolicy")}> privacy policy </span>.
                    </h3>
                    <div className={classes.agreeWrap}>
                        <input type="checkbox" defaultChecked={termsNconditions} onChange={(e) => setTermsNcondtions(!termsNconditions)} />
                        <h4>
                            I have read and agree to the website
                            <span onClick={() => route.push("/termsNconditions/TermsAndConditions")}> terms and conditions</span>
                        </h4>
                    </div>
                    <div className={classes.Btn} onClick={placeOrderValid}>
                        {orderLoading ? <CircularProgress /> : " Place order"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
