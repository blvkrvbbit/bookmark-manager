import { NavLink } from "react-router-dom";

import BookmarkManagerLogo from "../../../shared/icons/bookmark-manager-light.svg";
import HomeIcon from "../../../shared/icons/home.svg";
import ArchiveIcon from "../../../shared/icons/archive.svg";
import CloseIcon from "../../../shared/icons/x-close.svg";
import classes from "./Sidebar.module.scss";

type Props = {
  toggleSidebar: () => void;
  isOpen: boolean;
};

const tags = [
  {
    name: "Ai",
    count: 1,
  },
  {
    name: "Community",
    count: 5,
  },
  {
    name: "Compatibility",
    count: 1,
  },
  {
    name: "CSS",
    count: 6,
  },
  {
    name: "Design",
    count: 1,
  },
  {
    name: "Framework",
    count: 2,
  },
  {
    name: "Git",
    count: 1,
  },
  {
    name: "HTML",
    count: 2,
  },
  {
    name: "JavaScript",
    count: 3,
  },
  {
    name: "Layout",
    count: 3,
  },
  {
    name: "Learning",
    count: 6,
  },
  {
    name: "Performance",
    count: 2,
  },
  {
    name: "Practice",
    count: 5,
  },
  {
    name: "Reference",
    count: 4,
  },
  {
    name: "Tips",
    count: 4,
  },
  {
    name: "Tools",
    count: 4,
  },
  {
    name: "Tutorial",
    count: 1,
  },
];

const Sidebar = ({ toggleSidebar, isOpen }: Props) => {
  return (
    <aside className={`${classes.sidebar} ${isOpen ? classes.open : ""}`}>
      <header className={classes.sidebarHeader}>
        <img src={BookmarkManagerLogo} alt="" />
        <button onClick={toggleSidebar} className={classes.closeBtn}>
          <img src={CloseIcon} alt="" />
        </button>
      </header>
      <div className={classes.sidebarContent}>
        <div className={classes.navListContainer}>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <NavLink
                className={({ isActive }) =>
                  `${classes.navLink} ${isActive ? classes.active : ""}`
                }
                to="/dashboard"
                end
              >
                <img src={HomeIcon} alt="" />
                <span>Home</span>
              </NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink
                className={({ isActive }) =>
                  `${classes.navLink} ${isActive ? classes.active : ""}`
                }
                to="/archive"
              >
                <img src={ArchiveIcon} alt="" />
                <span>Archive</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.tagsContainer}>
          <header>
            <h6>TAGS</h6>
          </header>
          <ul className={classes.tagList}>
            {tags.map((t, id) => (
              <li className={classes.tagListItem} key={id}>
                <label htmlFor="">
                  <input type="checkbox" />
                  <span>{t.name}</span>
                </label>
                <div className={classes.badge}>{t.count}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
