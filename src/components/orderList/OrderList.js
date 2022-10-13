import React from "react";
import classes from "./OrderList.module.css";
import moment from "moment";

function OrderList({ orderData, setShowThank, setThankData }) {
  console.log(orderData);
  const handleThank = (dataRecieved) => {
    setThankData(dataRecieved);
    setShowThank(true);
  };
  return (
    <div className={classes.orderListWrapper}>
      <div className={classes.header}>
        <div>
          <h3>Order</h3>
        </div>
        <div>
          <h3>Date</h3>
        </div>
        <div>
          <h3>Status</h3>
        </div>
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <h3>Actions</h3>
        </div>
      </div>
      <div className={classes.headerDataWrap}>
        {orderData?.data?.map((data, i) => (
          <div key={i} className={classes.headerData}>
            <div>
              <h3>{data?.number}</h3>
            </div>
            <div>
              <h3>{moment(data?.date_created).format("MMM Do YY")}</h3>
            </div>
            <div>
              <h3>{data?.status}</h3>
            </div>
            <div>
              <h3>{`${"$"} ${data?.total}`}</h3>
            </div>
            <div>
              <div
                className={classes.Btn}
                onClick={() =>
                  handleThank({
                    number: data?.number,
                    date: moment(data?.date_paid).format("MMM Do YY"),
                    status: data?.status,
                    total: data?.total,
                    products: data?.line_items,
                    billing: data?.billing,
                    shipping: data?.shipping,
                    total_tax: data?.total_tax,
                    payment_method: data?.payment_method_title,
                    shipping_lines: data?.shipping_lines,
                  })
                }
              >
                View
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OrderList;
