import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

export default function BasicRating({ star, setStar }) {
    // const [value, setValue] = useState(2);

    return (
        <Box
            sx={{
                "& > legend": { mt: 2 },
            }}
        >
            <Rating
                name="simple-controlled"
                value={star}
                onChange={(event, newValue) => {
                    setStar(newValue);
                }}
                size="large"
            />
        </Box>
    );
}
