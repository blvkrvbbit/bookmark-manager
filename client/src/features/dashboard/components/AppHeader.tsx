import classes from "./AppHeader.module.scss";
import HamburgerIcon from "../../../shared/icons/hamburger.svg";
import AddIcon from "../../../shared/icons/add.svg";
import Avatar from "../../../shared/icons/avatar.svg";

import Search from "./Search";

type Props = {
  toggleSidebar: () => void;
};

const AppHeader = ({ toggleSidebar }: Props) => {
  return (
    <header className={classes.appHeader}>
      <div className={classes.topBar}>
        <button onClick={toggleSidebar} className={classes.hamburger}>
          <img src={HamburgerIcon} alt="" />
        </button>
        <Search />
        <button className={classes.addBtn}>
          <img src={AddIcon} alt="" />
        </button>
        <img className={classes.avatar} src={Avatar} alt="" />
      </div>
    </header>
  );
};

export default AppHeader;
