import React from "react";
import CardComp from "../../components/card/CardComp";
import Grid from "@mui/material/Grid";
import { Empty } from "antd";
import { Box, CircularProgress } from "@mui/material";

const Products = ({ products, loading }) => {
    return (
        <Grid container spacing={3} justifyContent={"center"}>
            {loading ? (
                <Box sx={{ display: "flex", height: "30vh" }}>
                    <CircularProgress />
                </Box>
            ) : !products || products.length === 0 ? (
                <Grid xs={12} md={6} lg={3} item={true}>
                    <Empty description={"No Products Found"} />
                </Grid>
            ) : (
                products?.map((prod, i) => (
                    <Grid xs={6} md={6} lg={3} key={i} item={true}>
                        <CardComp
                            image={prod?.images[0].src}
                            name={prod?.name}
                            price={prod?.price_html}
                            category={prod?.categories[0].name}
                            id={prod?.id}
                        />
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default React.memo(Products);
