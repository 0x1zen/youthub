import { useSelector } from "react-redux"; // Assuming Redux is used for state management
import Sidebar from "./Sidebar.jsx";
import MainContainer from "./MainContainer.jsx";
import { Outlet } from "react-router";
const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`grid grid-cols-12`}>
      <div className={isMenuOpen ? "col-span-2" : "col-span-1"}>
        <Sidebar />
      </div>
      <div className={isMenuOpen ? "col-span-10" : "col-span-11"}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
