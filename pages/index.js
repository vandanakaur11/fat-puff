import Navbar from "../src/components/navbar/Navbar";
import Slideshow from "../src/components/slider/Slideshow";
import BottomNav from "../src/components/bottomnav/BottomNav";
import MultiSlideshow from "../src/components/multislideshow/MultiSlideshow";
import Banner from "../src/components/Banner/Banner";
import FeatureOptions from "../src/components/featureOptions/FeatureOptions";
import Grid from "@mui/material/Grid";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { useEffect } from "react";
import {
  attachHeaders,
  getProductCategories,
  publicAPI,
  publicIP,
} from "../src/utils";
import HeadingComp from "../src/components/headingComp/HeadingComp";
import Footer from "../src/components/footer/Footer";
import Home from "../src/pages/Home/Home";
// import Home from "../src/pages/Home";
// require("dotenv").config();
const index = ({ products, categories }) => (
  <Home products={products} categories={categories} />
);
export default index;

export async function getStaticProps() {
  const getApi = await attachHeaders("products");
  const categoriesApi = await getProductCategories();
  const products = await publicAPI.get(getApi);
  const categories = await publicAPI.get(categoriesApi);

  return {
    props: {
      products: products?.data,
      categories: categories?.data,
      revalidate: 1800,
    },
  };
}
