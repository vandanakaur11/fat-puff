import React, { useState } from "react";
import classes from "./Banner.module.css";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import axios from "axios";
const Banner = ({ title, btnText, image, height, titleSmall, signup, text, icon }) => {
    const route = useRouter();
    // https://us20.api.mailchimp.com/3.0/lists/4438fbf7d5/members
    const [emailUser, setEmailUser] = useState("");
    var emailBody = {
        email_address: emailUser,
        status: "subscribed",
    };
    const auth = {
        username: "softapps",
        password: "c356226ab9f5a59d92a30cb9ba0097a9",
    };
    const submitEmail = async () => {
        console.log(emailUser);
        try {
            const res = await axios.post("https://us20.api.mailchimp.com/3.0/lists/4438fbf7d5/members", emailBody, {
                headers: {
                    Authorization: "Basic" + `softapps:c356226ab9f5a59d92a30cb9ba0097a9`,
                },
                // withCredentials: true,
                // auth: {
                //     username: "softapps",
                //     password: "c356226ab9f5a59d92a30cb9ba0097a9",
                // },
            });
            console.log(res);
        } catch (error) {
            console.log(error?.repsonse?.data?.message, "error");
        }
    };
    return (
        <div className={classes.bannerMain}>
            {titleSmall ? (
                <div className={classes.bannerCont} style={{ backgroundImage: `url(${image})`, height: `${height}px` }}>
                    <h3>{titleSmall}</h3>
                    <h1>{title}</h1>
                    <button>{btnText}</button>
                </div>
            ) : signup ? (
                <div className={classes.bannerContSignup} style={{ backgroundImage: `url(${image})`, height: `${height}px` }}>
                    <div className={classes.signupRight}>
                        <div>{icon}</div>
                        <div>
                            <h1>{title}</h1>
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className={classes.inpCont}>
                        <input placeholder="Email Address" onChange={(e) => setEmailUser(e.target.value)} />
                        <button onClick={() => submitEmail()}>{btnText}</button>
                    </div>
                </div>
            ) : (
                <div className={classes.bannerCont}>
                    <div
                        className={classes.bannerContent}
                        style={{
                            backgroundImage: `url(${image})`,
                            height: `${height}px`,
                        }}
                    >
                        <h1>{title}</h1>
                        {btnText == "Shop now" ? (
                            <button onClick={() => route.push("/")}>{btnText}</button>
                        ) : (
                            <button onClick={() => route.push("/wholesale")}>{btnText}</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;
