import classes from "./warn.module.css";

const Warn = () => {
  return (
    <div className={classes.warn}>
      <span>
        WARNING: This Product Contains Nicotine. Nicotine is an addictive
        chemical.
      </span>
    </div>
  );
};

export default Warn;
