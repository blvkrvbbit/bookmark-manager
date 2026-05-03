import classes from "./Search.module.scss";
import SearchIcon from "../../../shared/icons/search.svg";

const Search = () => {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="Search by title..." />
      <img className={classes.searchIcon} src={SearchIcon} alt="" />
    </div>
  );
};

export default Search;
