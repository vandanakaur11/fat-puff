import React, { useState } from "react";
import classes from "./ShippingForm.module.css";
import { Select } from "antd";

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
var countryList = [
  "Albania",
  "American Samoa",
  "Australia",
  "United Kingdom (UK)",
  "United States (US)",
];
function ShippingForm({ shipping, setUser, updateUser }) {
  const { Option } = Select;

  return (
    <div>
      <h2 className={classes.mainHeading}>Shipping Address</h2>
      <div className={classes.namesWrap}>
        <div>
          <h3>First name</h3>
          <input
            // onChange={(e) => setFname(e.target.value)}
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                shipping: {
                  ...shipping,
                  first_name: e.target.value,
                },
              }))
            }
            value={shipping?.first_name}
          />
        </div>
        <div>
          <h3>Last name</h3>
          <input
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                shipping: {
                  ...shipping,
                  last_name: e.target.value,
                },
              }))
            }
            value={shipping?.last_name}
          />
        </div>
      </div>
      <div className={classes.companynameWrapMultiple}>
        <h3>Company name (optional)</h3>
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              shipping: {
                ...shipping,
                company: e.target.value,
              },
            }))
          }
          value={shipping?.company}
        />
      </div>
      <div className={classes.countrynameWrap}>
        <h3>Country / Region </h3>
        <Select
          style={{ width: "100%" }}
          onChange={(value) =>
            setUser((prev) => ({
              ...prev,
              shipping: {
                ...shipping,
                country: value,
              },
            }))
          }
          defaultValue={shipping?.country}
        >
          {countryList.map((val, i) => (
            <Option key={i} value={val}>
              {val}
            </Option>
          ))}
        </Select>
      </div>
      <div className={classes.streetaddressWrap}>
        <h3>Street address</h3>
        <input
          placeholder="House number and street name"
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              shipping: {
                ...shipping,
                address_1: e.target.value,
              },
            }))
          }
          value={shipping?.address_1}
        />
        <input
          placeholder="Apartment, suit, unit, etc. (optional)"
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              shipping: {
                ...shipping,
                address_2: e.target.value,
              },
            }))
          }
          value={shipping?.address_2}
        />
      </div>
      <div className={classes.companynameWrapMultiple}>
        <h3>Town / City</h3>
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              shipping: {
                ...shipping,
                city: e.target.value,
              },
            }))
          }
          value={shipping?.city}
        />
      </div>

      <div className={classes.statenameWrap}>
        <h3>State </h3>
        {/* <select>
        {stateList.map((val, i) => (
          <option key={i} value="">
            {val.name}
          </option>
        ))}
      </select> */}
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              shipping: {
                ...shipping,
                state: e.target.value,
              },
            }))
          }
          value={shipping?.state}
        />
      </div>
      <div className={classes.companynameWrapMultiple}>
        <h3>Zip Code</h3>
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              shipping: {
                ...shipping,
                postcode: e.target.value,
              },
            }))
          }
          value={shipping?.postcode}
        />
      </div>
      <div className={classes.companynameWrapMultiple}>
        <h3>Phone</h3>
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              shipping: {
                ...shipping,
                phone: e.target.value,
              },
            }))
          }
          value={shipping?.phone}
        />
      </div>

      <div className={classes.Btn} onClick={updateUser}>
        Save Address
      </div>
    </div>
  );
}

export default ShippingForm;
