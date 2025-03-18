import { useSelector } from "react-redux"; // Assuming Redux is used for state management
import Sidebar from "./Sidebar.jsx";
import MainContainer from "./MainContainer.jsx";
const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={`grid grid-cols-12`}>
      <div className={isMenuOpen ? "col-span-2" : "col-span-1"}>
        <Sidebar />
      </div>
      <div className={isMenuOpen ? "col-span-10" : "col-span-11"}>
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
