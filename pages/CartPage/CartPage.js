import { useDispatch, useSelector } from "react-redux";
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
  TableFooter,
  Paper,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
// import classes from "../../src/section/Variations/variation.module.css";
import classes from "./CartPage.module.css";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { notification } from "antd";
import { Drawer, Typography, Empty } from "antd";
import Image from "next/image";
import { removeItem, updateTotal } from "../../src/redux";
import { useRouter } from "next/router";

const CartPage = () => {
  const route = useRouter();
  const cart = useSelector((state) => state.cartReducer.cart);
  const [total, setTotal] = useState(0);

  const router = useRouter();

  const [shipRate, setShipRate] = useState(20);
  const dispatch = useDispatch();
  useEffect(() => {
    let totalPriceArray = [];

    cart?.map((item, i) => {
      totalPriceArray.push(item?.quantity * Number(item?.price));
    });

    let subtotal = totalPriceArray.reduce((a, b) => a + b, 0);
    setTotal(subtotal);
  }, [cart]);

  const handleQuantityChange = (id, quan, i) => {
    const cartIndex = cart?.findIndex((index) => index.id === id);

    if (quan < 1) return;
    if (cartIndex > -1) {
      if (quan > cart[cartIndex].stock) {
        notification.error({
          message: `Item Out Of Stock!`,
          placement: "bottomLeft",
          duration: 2,
        });
      } else {
        const payload = {
          id,
          quantity: Number(quan),
        };
        notification.success({
          message: `Cart Updated!`,
          placement: "bottomLeft",
          duration: 2,
        });
        dispatch(updateTotal(payload));
      }
    }
  };

  return (
    <>
      {cart?.length !== 0 ? (
        <div className={classes.mainCartTable}>
          <h1 className={classes.mainHeading}>Cart</h1>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table
              aria-label="simple table"
              size={"medium"}
              className={classes.variationMainInner}
            >
              <TableHead>
                <TableRow>
                  <TableCell className={classes.title}></TableCell>
                  <TableCell className={classes.title}></TableCell>
                  <TableCell className={classes.title}>Product</TableCell>
                  <TableCell className={classes.title}>Price</TableCell>
                  <TableCell align="center" className={classes.title}>
                    Quantity
                  </TableCell>
                  <TableCell align="center" className={classes.title}>
                    SubTotal
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart?.map((row, i) => {
                  let src = row?.img;
                  return (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      className={classes.tablerowStyle}
                    >
                      <TableCell>
                        <IconButton>
                          <DeleteIcon
                            onClick={() => dispatch(removeItem(i))}
                            className={classes.deleteIcon}
                          />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <Image
                          src={src}
                          loader={() => src}
                          height={100}
                          width={100}
                        />
                      </TableCell>
                      <TableCell className={classes.productData}>
                        {row?.name} <br /> {row?.flavor}
                      </TableCell>
                      <TableCell align="center" className={classes.productData}>
                        ${row?.price}
                      </TableCell>
                      <TableCell align="center">
                        <Input
                          className={classes.productData}
                          type="number"
                          // value={quantity[i]}
                          value={row?.quantity}
                          style={{ width: "30%" }}
                          onChange={(e) => {
                            handleQuantityChange(row.id, e.target.value, i);
                          }}
                        />
                      </TableCell>
                      <TableCell align="center" className={classes.productData}>
                        $ {row?.quantity * row?.price}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            {/* <div
          style={{
            fontSize: "12px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{ fontSize: "12px", marginLeft: "auto" }}
            variant="contained"
            onClick={handleUpdateCart}
          >
            Update Cart
          </Button>
        </div> */}
          </TableContainer>
          <div className={classes.cartTotal}>
            <TableContainer component={Paper}>
              <Table
                aria-label="simple table"
                size={"medium"}
                // style={{ border: "1px solid #EBEBEB" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.title}>Cart Total</TableCell>
                    <TableCell className={classes.title}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.title}>SubTotal</TableCell>
                    <TableCell className={classes.title}>${total}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" className={classes.title}>
                      Shipping
                    </TableCell>
                    <TableCell className={classes.title}>
                      {" "}
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="shipping"
                          defaultValue={20}
                          value={shipRate}
                          name="radio-buttons-group"
                          onChange={(e) => setShipRate(Number(e.target.value))}
                        >
                          <FormControlLabel
                            value={20}
                            control={<Radio />}
                            label="Ordering 1-3 boxes (2-4 Day Mail): $20.00"
                          />
                          <FormControlLabel
                            value={30}
                            control={<Radio />}
                            label="Ordering 3-5 boxes (2-4 Day Mail): $30.00"
                          />
                          <FormControlLabel
                            value={40}
                            control={<Radio />}
                            label="Ordering 5-10 boxes (2-4 Day Mail): $40.00"
                          />
                        </RadioGroup>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.title}>Tax</TableCell>
                    <TableCell className={classes.title}>$0.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.title}>Total</TableCell>
                    <TableCell className={classes.title}>
                      ${total + shipRate}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              style={{ width: "100%", marginTop: "20px" }}
              variant="contained"
              onClick={() => router.push("/checkout/Checkout")}
            >
              Proceed To Checkout
            </Button>
          </div>
        </div>
      ) : (
        <>
          <Empty description={"Cart Is Empty"} style={{ marginTop: "15vh" }} />
          <div className={classes.emptyCartBtn} onClick={() => route.push("/")}>
            Return to shop
          </div>
        </>
      )}
    </>
  );
};

export default CartPage;
