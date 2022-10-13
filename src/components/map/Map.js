import React from "react";
import classes from "./Map.module.css";

function Map() {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.97735941784!2d-80.62809188455726!3d28.116720613988235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de11d36ae8c087%3A0x9b0416988bdde20!2s500%20N%20Harbor%20City%20Blvd%2C%20Melbourne%2C%20FL%2032935%2C%20USA!5e0!3m2!1sen!2s!4v1642156164542!5m2!1sen!2s"
                loading="lazy"
                className={classes.mapStyle}
            ></iframe>
        </div>
    );
}

export default Map;
