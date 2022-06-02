import classes from "./Search.module.scss";

import { SearchContext } from "../../App";
import { useContext } from "react";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <input
      className={classes.input}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      type='text'
      placeholder='Поиск...'
    />
  );
};

export default Search;
