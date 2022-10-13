import Image from "next/image";
import classes from "./item.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux";
const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const src = item?.img;
  return (
    <div key={index} className={classes.cartItem}>
      <span
        className={classes.dltBtn}
        onClick={() => dispatch(removeItem(index))}
      >
        <DeleteIcon />
      </span>
      <div>
        <Image src={src} loader={() => src} height={150} width={180} />
      </div>
      <div className={classes.itemInfo}>
        <p className={classes.itemName}>{item?.name}</p>

        <p className={classes.flavor}>{item?.flavor}</p>
        <p>
          {item?.quantity} x ${item?.price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
