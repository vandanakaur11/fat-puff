import React, { useState } from "react";
import classes from "./ThankComp.module.css";

const ThankComp = ({ thankData, setShowThank }) => {
  console.log(thankData);
  return (
    <div>
      <h1>Order details</h1>
      <h3 className={classes.backBtn} onClick={() => setShowThank(false)}>
        Go Back
      </h3>
      <div>
        <div className={classes.productHeadings}>
          <div>
            <h3>Product</h3>
          </div>
          <div>
            <h3>Total</h3>
          </div>
        </div>
        <div>
          {thankData?.products?.map((data, i) => (
            <div key={i} className={classes.productHeadingsData}>
              <div className={classes.productInner}>
                <h3>{`${data?.name} ${"X"} ${data?.quantity}`}</h3>
              </div>

              <div className={classes.productInner}>
                <h3>{`${"$"} ${data?.price}`}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.subtotalMultiple}>
        <div>
          <h3>Subtotal</h3>
        </div>
        <div>
          <h3>{`${"$"} ${thankData?.total}`}</h3>
        </div>
      </div>
      <div className={classes.subtotalMultiple}>
        <div>
          <h3>Shipping</h3>
        </div>
        <div>
          <h3>{`${thankData?.shipping_lines?.[0]?.total} via ${thankData?.shipping_lines[0]?.method_title}`}</h3>
        </div>
      </div>
      <div className={classes.subtotalMultiple}>
        <div>
          <h3>Tax:</h3>
        </div>
        <div>
          <h3>${thankData?.total_tax}</h3>
        </div>
      </div>
      <div className={classes.subtotalMultiple}>
        <div>
          <h3>Payment method</h3>
        </div>
        <div>
          <h3>{thankData?.payment_method}</h3>
        </div>
      </div>
      <div className={classes.subtotalMultiple}>
        <div>
          <h3>Total:</h3>
        </div>
        <div>
          <h3>{`${"$"} ${thankData?.total}`}</h3>
        </div>
      </div>

      <div className={classes.addresses}>
        <div>
          <h1>Billing address</h1>
          <h3>{`${thankData?.billing.first_name} ${thankData?.billing.last_name}`}</h3>
          <h3>{thankData?.billing.address_1}</h3>
          <h3>{thankData?.billing.address_2}</h3>
          <h3>{thankData?.billing.state}</h3>
          <h3>{thankData?.billing.phone}</h3>
          <i>
            <h3 className={classes.email}>{thankData?.billing.email}</h3>
          </i>
        </div>
        <div>
          <h1>Shipping address</h1>
          <h3>{`${thankData?.shipping.first_name} ${thankData?.billing.last_name}`}</h3>
          <h3>{thankData?.shipping?.address_1}</h3>
          <h3>{thankData?.shipping.address_2}</h3>
          <h3>{thankData?.shipping.state}</h3>
          <h3>{thankData?.shipping.phone}</h3>
        </div>
      </div>
    </div>
  );
};

export default ThankComp;
