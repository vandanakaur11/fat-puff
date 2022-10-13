import React, { useState } from "react";
import classes from "./BillingForm.module.css";
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
function BillingForm({ billing, setUser, updateUser }) {
  const { Option } = Select;
  return (
    <div>
      <h2 className={classes.mainHeading}>Billing Address</h2>
      <div className={classes.namesWrap}>
        <div>
          <h3>First name</h3>
          <input
            // onChange={(e) => setFname(e.target.value)}
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                billing: {
                  ...billing,
                  first_name: e.target.value,
                },
              }))
            }
            value={billing?.first_name}
          />
        </div>
        <div>
          <h3>Last name</h3>
          <input
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                billing: {
                  ...billing,
                  last_name: e.target.value,
                },
              }))
            }
            value={billing?.last_name}
          />
        </div>
      </div>
      <div className={classes.companynameWrapMultiple}>
        <h3>Company name (optional)</h3>
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              billing: {
                ...billing,
                company: e.target.value,
              },
            }))
          }
          value={billing?.company}
        />
      </div>
      <div className={classes.countrynameWrap}>
        <h3>Country / Region </h3>
        <Select
          style={{ width: "100%" }}
          onChange={(value) =>
            setUser((prev) => ({
              ...prev,
              billing: {
                ...billing,
                country: value,
              },
            }))
          }
          defaultValue={billing?.country}
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
              billing: {
                ...billing,
                address_1: e.target.value,
              },
            }))
          }
          value={billing?.address_1}
        />
        <input
          placeholder="Apartment, suit, unit, etc. (optional)"
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              billing: {
                ...billing,
                address_2: e.target.value,
              },
            }))
          }
          value={billing?.address_2}
        />
      </div>
      <div className={classes.companynameWrapMultiple}>
        <h3>Town / City</h3>
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              billing: {
                ...billing,
                city: e.target.value,
              },
            }))
          }
          value={billing?.city}
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
              billing: {
                ...billing,
                state: e.target.value,
              },
            }))
          }
          value={billing?.state}
        />
      </div>
      <div className={classes.companynameWrapMultiple}>
        <h3>Zip Code</h3>
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              billing: {
                ...billing,
                postcode: e.target.value,
              },
            }))
          }
          value={billing?.postcode}
        />
      </div>
      <div className={classes.companynameWrapMultiple}>
        <h3>Phone</h3>
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              billing: {
                ...billing,
                phone: e.target.value,
              },
            }))
          }
          value={billing?.phone}
        />
      </div>
      <div className={classes.companynameWrapMultiple}>
        <h3>Email address</h3>
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              billing: {
                ...billing,
                email: e.target.value,
              },
            }))
          }
          value={billing?.email}
        />
      </div>
      <div className={classes.Btn} onClick={updateUser}>
        Save Address
      </div>
    </div>
  );
}

export default BillingForm;
