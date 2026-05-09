import { useState, type ReactNode } from "react";
import AppHeader from "../features/dashboard/components/AppHeader";
import Sidebar from "../features/dashboard/components/Sidebar";
import classes from "./DashboardLayout.module.scss";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Clicked", isSidebarOpen);
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div>
      <AppHeader toggleSidebar={toggleSidebar} />
      <div className={isSidebarOpen ? classes.overlay : ""}>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
