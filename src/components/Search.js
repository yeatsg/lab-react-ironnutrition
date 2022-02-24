import React from 'react';

const Search = (props) => {
  const [searchText, setSearchText] = React.useState('');

  let filteredFoods = (input) => {
    setSearchText(input);
    let searchResults = props.foodArr.filter((foodItem) => {
      return foodItem.name.includes(input);
    });
    props.setSearchFood(searchResults);
  };

  // const searchStuff = () => {
  //   return (

  //   );
  // }

  return (
    <div>
      <input
        type="text"
        placeholder="search colors"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
