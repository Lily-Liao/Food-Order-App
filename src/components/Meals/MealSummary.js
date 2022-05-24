import React from "react";
import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <div className={classes.summary__intro}>
      <strong className={classes.summary__introTitle}>
        Delicious Food, Deliverd To You
      </strong>
      <p className={classes.summary__content}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={classes.summary__content}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default MealSummary;
