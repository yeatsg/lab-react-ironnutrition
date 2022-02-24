import React from 'react';

const AddFoodForm = (props) => {
  const [newName, setNewName] = React.useState('');
  const [newImage, setNewImage] = React.useState('');
  const [newCalories, setNewCalories] = React.useState('');
  const [newServing, setNewServing] = React.useState('');
  const addFoodObj = (e) => {
    e.preventDefault();
    props.foodies.setFoodsArr(
      props.foodies.foodsArr.concat({
        name: newName,
        image: newImage,
        calories: newCalories,
        servings: newServing,
      })
    );
    setNewName('');
    setNewImage('');
    setNewCalories('');
    setNewServing('');
    console.log(props.foodies.foodsArr);
  };

  return (
    <div>
      <label htmlFor="nameInput">Name</label>
      <input
        name="nameInput"
        value={newName}
        type="text"
        onChange={(e) => setNewName(e.target.value)}
      />
      <label htmlFor="imageInput">Image URL</label>
      <input
        name="imageInput"
        value={newImage}
        type="text"
        onChange={(e) => setNewImage(e.target.value)}
      />
      <label htmlFor="caloriesInput">Calories</label>
      <input
        name="caloriesInput"
        value={newCalories}
        type="number"
        onChange={(e) => setNewCalories(e.target.value)}
      />
      <label htmlFor="servingInput">Serving</label>
      <input
        name="servingInput"
        value={newServing}
        type="number"
        onChange={(e) => setNewServing(e.target.value)}
      />
      <button
        onClick={(e) => {
          addFoodObj(e);
        }}
      >
        Create
      </button>
    </div>
  );
};

export default AddFoodForm;
