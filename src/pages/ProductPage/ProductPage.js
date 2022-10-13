import React from "react";

import { Grid } from "@mui/material";
import Image from "next/image";
import classes from "./Product.module.css";
import Divider from "@mui/material/Divider";
import Carousel from "react-multi-carousel";
import VariationsTable from "../../section/Variations/VariationsTable";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Tag } from "antd";

const ProductPage = ({ product, variations }) => {
  const [value, setValue] = useState(0);
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={classes.productMain}>
      <div>
        <Grid container spacing={3}>
          <Grid xs={12} lg={6} item={true}>
            <div>
              <Carousel responsive={responsive}>
                {product?.images?.map((img, i) => (
                  <Image
                    src={img.src}
                    loader={() => img.src}
                    height={600}
                    width={600}
                    key={i}
                  />
                ))}
              </Carousel>
            </div>
          </Grid>
          <Grid xs={12} lg={6} item={true}>
            <div className={classes.prodDesc}>
              <p className={classes.name}>{product?.name}</p>
              <span
                dangerouslySetInnerHTML={{ __html: product?.price_html }}
                className={classes.price}
              />
              <span
                dangerouslySetInnerHTML={{ __html: product?.short_description }}
                className={classes.desc}
              />
              <Divider />
              <p>SKU : N/A</p>
              <p>Catgeory : {product?.categories[0]?.name}</p>
              {product?.tag && (
                <p className={classes.tag}>
                  Tags :{" "}
                  {product?.tags.map((tag, i) => (
                    <span key={i}> {tag.name}</span>
                  ))}
                </p>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
      <VariationsTable
        variations={variations}
        img={product?.images[0].src}
        name={product?.name}
        productId={product?.id}
      />
      <Box sx={{ width: "100%", marginTop: "30px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Description"
              {...a11yProps(0)}
              style={{ fontWeight: "bold" }}
            />
            <Tab
              label=" Additional Information"
              {...a11yProps(1)}
              style={{ fontWeight: "bold" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div
            dangerouslySetInnerHTML={{ __html: product?.description }}
            className={classes.descriptionInfoHeading}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <h2 className={classes.additionalInfoHeading}>Flavors:</h2>
            <div style={{ lineHeight: "30px" }}>
              {variations?.map(({ attributes }) =>
                attributes?.map((item, index) => (
                  <Tag color={"purple"} key={index}>
                    {item?.option}
                  </Tag>
                ))
              )}
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
};

export default ProductPage;
