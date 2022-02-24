import React from 'react';
import FoodBox from './FoodBox';

const IterateDatabase = (props) => {
  return props.foods.map((item) => {
    return (
      <div>
        <FoodBox food={item} />
      </div>
    );
  });
};

export default IterateDatabase;
