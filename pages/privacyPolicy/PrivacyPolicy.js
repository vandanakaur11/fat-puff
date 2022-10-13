import React from "react";
import classes from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
    return (
        <div className={classes.privacyPolicyWrapper}>
            <h1>Privacy Policy</h1>
            <h2>Who we are</h2>
            <h6>
                Our website address is :{" "}
                <a href="https://fatpuffwholesale.com">
                    <b>https://fatpuffwholesale.com.</b>
                </a>
            </h6>
            <h2>What personal data we collect and why we collect it</h2>
            <h3>Comments</h3>
            <h6>
                When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address
                and browser user agent string to help spam detection.
                <br />
                An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if
                you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of
                your comment, your profile picture is visible to the public in the context of your comment.
            </h6>
            <h3>Media</h3>
            <h6>
                If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included.
                Visitors to the website can download and extract any location data from images on the website.
            </h6>
            <h3>Contact forms</h3>
            <h3>Cookies</h3>
            <h6>
                If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for
                your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will
                last for one year.
                <br />
                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie
                contains no personal data and is discarded when you close your browser.
                <br />
                When you log in, we will also set up several cookies to save your login information and your screen display choices. Login
                cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist
                for two weeks. If you log out of your account, the login cookies will be removed.
                <br />
                If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data
                and simply indicates the post ID of the article you just edited. It expires after 1 day.
            </h6>
            <h3>Embedded content from other websites</h3>
            <h6>
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other
                websites behaves in the exact same way as if the visitor has visited the other website.
                <br />
                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction
                with that embedded content, including tracking your interaction with the embedded content if you have an account and are
                logged in to that website.
            </h6>
            <h3>Analytics</h3>
            <h2>Who we share your data with</h2>
            <h2>How long we retain your data</h2>
            <h6>
                If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any
                follow-up comments automatically instead of holding them in a moderation queue.
                <br />
                For users that register on our website (if any), we also store the personal information they provide in their user profile.
                All users can see, edit, or delete their personal information at any time (except they cannot change their username).
                Website administrators can also see and edit that information.
            </h6>
            <h3>What rights you have over your data</h3>
            <h6>
                If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data
                we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold
                about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
            </h6>
            <h3>Where we send your data</h3>
            <h6>Visitor comments may be checked through an automated spam detection service.</h6>
            <h3>Your contact information</h3>
            <h4>How we protect your data</h4>
            <h4>What data breach procedures we have in place</h4>
            <h4>What third parties we receive data from</h4>
            <h4>What automated decision making and/or profiling we do with user data</h4>
            <h4>Industry regulatory disclosure requirements</h4>
        </div>
    );
}

export default PrivacyPolicy;
