import React from "react";
import classes from "./PaymentCard.module.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
// cvc: "",
// expiry: "",
// focus: "",
// name: "",
// number: "",

function PaymentCard({ cardData, setData, setIsCardValid }) {
    const handleInputFocus = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, focus: name }));
    };
    const handleCheckCardIsuer = (value) => {
        if (value.issuer === "unknown") {
            setIsCardValid(false);
        } else {
            setIsCardValid(true);
        }
    };
    const handleCardNumberChange = (e) => {
        let formattedText = e.target.value.split(" ").join("");
        if (formattedText.length > 0) {
            formattedText = formattedText.match(new RegExp(".{1,4}", "g")).join(" ");
        }
        // this.setState({ cardNumber: formattedText });
        setData((prev) => ({ ...prev, number: formattedText }));
    };
    const handleExpiryChange = (e) => {
        let formattedText = e.target.value.split(" ").join("");
        if (formattedText.length > 0) {
            formattedText = formattedText.match(new RegExp(".{1,4}", "g")).join(" ");
            console.log(formattedText);
        }
        // this.setState({ cardNumber: formattedText });
        setData((prev) => ({ ...prev, expiry: formattedText }));
    };
    return (
        <div className={classes.cardBox}>
            <h3>Pay with your credit card via Authorize.Net.</h3>
            <div style={{ width: "100%" }}>
                <Cards
                    cvc={cardData.cvc}
                    expiry={cardData.expiry}
                    focused={cardData.focus}
                    name={cardData.name}
                    number={cardData.number}
                    callback={handleCheckCardIsuer}
                />
            </div>

            <div>
                <h3 className={classes.cardNumber}>Card number</h3>
                <input
                    inputMode="numeric"
                    // autoComplete="cc-number"
                    maxLength="19"
                    placeholder="xxxx xxxx xxxx xxxx"
                    // pattern="[0-9\s]{13,19}"
                    name="number"
                    onChange={(e) => {
                        setData((prev) => ({ ...prev, number: e.target.value }));
                        // handleInputChange(e);
                        handleCardNumberChange(e);
                    }}
                    value={cardData.number}
                    onFocus={handleInputFocus}
                />
                <h5>This feild is required</h5>
            </div>
            <div>
                <h3 className={classes.cardNumber}>Name</h3>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => {
                        setData((prev) => ({ ...prev, name: e.target.value }));
                        // handleInputChange(e);
                    }}
                    value={cardData.name}
                    onFocus={handleInputFocus}
                />
                <h5>This feild is required</h5>
            </div>
            <div className={classes.cardBoxInner}>
                <div>
                    <h3>Expiry (YYYY/MM)</h3>
                    <input
                        value={cardData.expiry}
                        // type="number"
                        placeholder="YYYY/MM"
                        name="expiry"
                        maxLength={7}
                        onChange={(e) => {
                            setData((prev) => ({ ...prev, expiry: e.target.value }));
                            // handleInputChange(e);
                            handleExpiryChange(e);
                        }}
                        onFocus={handleInputFocus}
                    />
                    <h5>This feild is required</h5>
                </div>
                <div>
                    <h3>Card code</h3>
                    <input
                        // type="number"
                        name="cvc"
                        inputMode="numeric"
                        value={cardData.cvc}
                        maxLength={4}
                        onChange={(e) => {
                            setData((prev) => ({ ...prev, cvc: e.target.value }));
                            //   handleInputChange(e);
                        }}
                        onFocus={handleInputFocus}
                    />
                    <h5>This feild is required</h5>
                </div>
            </div>
        </div>
    );
}

export default PaymentCard;
