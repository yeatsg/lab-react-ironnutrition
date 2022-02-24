import React from 'react';

const FoodBox = (props) => {
  return (
    <div key={props.food.name} className="foodBox">
      <h2>{props.food.name}</h2>
      <img src={props.food.image} className="imageBox" />
      <p>Calories: {props.food.calories}</p>
      <p>
        Servings: <b>{props.food.servings}</b>
      </p>
      <p>
        <b>Total Calories: {props.food.servings * props.food.calories}</b> kcal
      </p>
      <button>Delete</button>
    </div>
  );
};

export default FoodBox;
