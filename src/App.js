import './App.css';
import logo from './logo.svg';
import React from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import IterateDatabase from './components/IterateDatabase';
import Search from './components/Search';

function App() {
  const [foodsArr, setFoodsArr] = React.useState(foods);

  return (
    <div className="App">
      <h3>Add Food Entry</h3>
      <Search foodsArr={foodsArr} setFoodsArr={setFoodsArr} />
      <AddFoodForm foodies={{ foodsArr, setFoodsArr }} />
      <IterateDatabase foods={foodsArr} className="orderBoxes" />
    </div>
  );
}

export default App;
