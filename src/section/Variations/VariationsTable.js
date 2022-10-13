import * as React from "react";
import { useState } from "react";
import {
  Button,
  Input,
  TextField,
  Snackbar,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import classes from "./variation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux";
import { notification } from "antd";
const VariationsTable = ({ variations, name, img, productId }) => {
  const [quantity, setQuantity] = useState({
    count: 1,
  });
  const [open, setOpen] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  // const [inCart, setInCart] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const handleQuantityChange = (e, i) => {
    const { name, value } = e.target;

    if (value < 1) {
      setQuantity((prev) => ({
        ...prev,
        count: 1,
      }));
    }

    if (quantity.count) {
      setQuantity((prev) => ({
        ...value,
        [i]: Math.abs(Number(value)),
      }));
    } else {
      setQuantity((prev) => ({
        ...prev,
        [i]: Math.abs(Number(value)),
      }));
    }
  };

  const handleAddToCart = (item, i) => {
    let payload;
    if (quantity[i] === 0) return;
    // let newCartArr = [...localCart];
    let inCart;
    let indexOfitem = cart.findIndex((index) => item.id === index.id);
    if (
      item?.stock_quantity <= 0 ||
      quantity[i] > item?.stock_quantity
      // quantity[i] > cart[indexOfitem]?.quantity
    ) {
      notification.error({
        message: `Out Of Stock!`,
        placement: "bottomLeft",
        duration: 2,
      });
      setOutOfStock(true);
      return;
    }
    if (indexOfitem !== -1) {
      if (
        cart[indexOfitem]?.quantity >= item?.stock_quantity ||
        quantity[i] >= item?.stock_quantity ||
        cart[indexOfitem]?.quantity + quantity[i] >= item?.stock_quantity
      ) {
        console.log("add krne ki waja");
        notification.error({
          message: `Out Of Stock!`,
          placement: "bottomLeft",
          duration: 2,
        });
        return;
      } else if (cart[indexOfitem].quantity < item?.stock_quantity) {
        payload = {
          id: item?.id,
          quantity: quantity[i] === undefined ? 1 : quantity[i],
        };
        inCart = true;
        // newCartArr[indexOfitem].quantity =
        //   quantity[i] === undefined ? 1 : quantity[i];
        // localStorage.setItem("cart", JSON.stringify(newCartArr));
      }
    } else {
      payload = {
        productId,
        name,
        img,
        flavor: item?.attributes[0].option,
        id: item?.id,
        price: item?.price,
        inCart: true,
        quantity: quantity[i] === undefined ? 1 : quantity[i],
        stock: item?.stock_quantity,
        // flavor:
      };

      inCart = false;
      // let tempArr = [...localCart, payload];
      // localStorage.setItem("cart", JSON.stringify(...localCart, payload));
    }
    setOpen(true);
    notification.success({
      message: `Added To Cart!`,
      placement: "bottomLeft",
      duration: 2,
    });
    dispatch(addToCart(payload, inCart));
    // console.log(newCartArr);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOutOfStock(false);
  };
  return (
    <div className={classes.variationMain}>
      <h1>Variations</h1>
      <TableContainer component={Paper} style={{ padding: "20px" }}>
        <Table
          aria-label="simple table"
          size={"small"}
          className={classes.variationMainInner}
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.title}>Flavors</TableCell>
              <TableCell className={classes.title}>Price</TableCell>
              <TableCell align="center" className={classes.title}>
                Stock
              </TableCell>
              <TableCell align="center" className={classes.title}>
                Quantity
              </TableCell>
              <TableCell align="center" className={classes.title}>
                Add To Cart
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {variations?.map((row, i) => {
              {
                return (
                  row?.stock_quantity >= 1 && (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      className={classes.tablerowStyle}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.rowText}
                      >
                        {row?.attributes?.map((item, i) => (
                          <span key={i}>{item.option}</span>
                        ))}
                      </TableCell>
                      <TableCell>${row?.price}</TableCell>
                      <TableCell align="center">
                        {row?.stock_quantity}
                      </TableCell>
                      <TableCell align="center">
                        <Input
                          type="number"
                          value={quantity.count}
                          className={classes.quantity}
                          onChange={(e) => handleQuantityChange(e, i)}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          onClick={() => handleAddToCart(row, i)}
                        >
                          Add to Cart
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default React.memo(VariationsTable);
