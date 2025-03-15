import MainContainer from "./MainContainer.jsx";
import Sidebar from "./Sidebar.jsx";
const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <MainContainer />
    </div>
  );
};
export default Body;
