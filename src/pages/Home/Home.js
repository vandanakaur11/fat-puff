import FeatureOptions from "../../components/featureOptions/FeatureOptions";
import Grid from "@mui/material/Grid";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import HeadingComp from "../../components/headingComp/HeadingComp";
import Slideshow from "../../components/slider/Slideshow";
import Banner from "../../components/Banner/Banner";
import Products from "../../section/Products/Products";
import {
  Input,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";
import { getSearchProducts, publicAPI } from "../../utils";
import classes from "./Home.module.css";

export default function Home({ products, categories }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchedProducts, setSearchedProducts] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setIsSearch(true);
    setLoading(true);
    if (searchValue === "") {
      setSearchedProducts(products);
    }
    // } else {
    // products?.map((prod) => {
    //   let productName = prod.name.toLowerCase().split(" ");
    //   if (productName.includes(searchValue)) {
    //   }
    // });

    const found = products.filter((item) => {
      const prodName = item.name.toLowerCase();
      if (prodName.match(searchValue.toLowerCase())) {
        return item;
      }
    });
    setLoading(false);
    setSearchedProducts(found);
    // const searchUrl = await getSearchProducts(searchValue);
    // const { data } = await publicAPI.get(searchUrl);
    // console.log(data);
    // setLoading(false);
    // setSearchedProducts(data && data);
    // }
  };
  const handleCategoryChange = async (e) => {
    setCategory(e.target.value);
    setIsSearch(true);
    const categoryId = e.target.value;
    let catArr = [];
    products?.map((prod) => {
      let result = prod?.categories?.filter((item) => item.id === categoryId);
      if (result.length !== 0) {
        catArr.push(prod);
      }
    });
    setSearchedProducts(catArr);
  };
  const handleClear = () => {
    setSearchValue("");
    setCategory("");
    setIsSearch(false);
    setLoading(false);
  };

  return (
    <div>
      <Slideshow />

      <div className={classes.homeContainer}>
        <HeadingComp />
        <div className={classes.searchContainer}>
          <div className={classes.searchBar}>
            <Input
              placeholder="Search Products ..."
              style={{
                border: "1px solid gray",
                borderRadius: "5px",
                padding: "10px",
                borderBottom: "none",
              }}
              value={searchValue}
              // onChange={handleSearch}
              onChange={(e) => setSearchValue(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="start">
                  <Button variant="outlined" onClick={handleSearch}>
                    Search
                  </Button>
                </InputAdornment>
              }
            />
          </div>
          <div className={classes.categoryBar}>
            <FormControl
              variant="outlined"
              sx={{ minWidth: 200, marginLeft: "10px" }}
            >
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={handleCategoryChange}
                label="Category"
                placeholder="Category"
                autoWidth={true}
              >
                {/* <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
                {categories?.map((category) => (
                  <MenuItem
                    value={category?.id}
                    key={category?.id}
                    className={classes.categoryStyle}
                  >
                    {category?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {isSearch ? (
              <IconButton
                onClick={handleClear}
                color="primary"
                aria-label="clear"
                component="span"
              >
                <Clear />
              </IconButton>
            ) : (
              ""
            )}
          </div>
        </div>
        <Products
          products={isSearch ? searchedProducts : products}
          loading={loading}
        />
        <Grid container spacing={2} alignItems={"flex-start"}>
          <Grid item md={6} xs={12}>
            <Banner
              titleSmall={""}
              //   title={"FREEBASE JUICE"}
              title={"POPULAR PRODUCTS"}
              btnText={"Shop now"}
              image={
                "https://image.freepik.com/free-photo/aesthetic-purple-smoke-banner-background_53876-129044.jpg"
              }
              height={350}
            />
          </Grid>
          <Grid item md={6} xs={12} alignItems="flex-start">
            <Banner
              //   titleSmall={"ON SALE"}
              title={"APPLY FOR WHOLESALE PRICING"}
              btnText={"Apply Now"}
              image={
                "https://image.freepik.com/free-vector/art-illustration_65186-2663.jpg"
              }
              height={350}
            />
          </Grid>
        </Grid>
        <FeatureOptions />
        <Banner
          title={"sign up & save 10%"}
          text={
            "Sign up to our newsletter today and receive 10% OFF your first order"
          }
          btnText={"Submit"}
          image={
            "https://wpbingosite.com/wordpress/vapier/wp-content/uploads/2021/06/bg-10-2.jpg"
          }
          height={250}
          signup={true}
          icon={<ForwardToInboxIcon />}
        />
      </div>
      {/* <Footer />
            <FooterBottom /> */}
    </div>
  );
}
