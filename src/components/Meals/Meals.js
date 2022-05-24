import React from "react";
import Card from "../UI/Card";
import MealItems from "./MealItems";
import classes from "./Meals.module.css";
import MealSummary from "./MealSummary";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = () => {
  const mealList = DUMMY_MEALS.map((item) => {
    return (
      <MealItems
        id={item.id}
        name={item.name}
        price={item.price}
        description={item.description}
        key={item.id}
      />
    );
  });

  return (
    <div className={classes.meals_container}>
      <MealSummary />
      <section className={classes.meals}>
        <Card>
          <ul>{mealList}</ul>
        </Card>
      </section>
    </div>
  );
};

export default Meals;
