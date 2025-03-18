import { HAM_ICON, YT_LOGO , USER_ICON , SEARCH_LOGO } from "../utils/constants";
import {useDispatch} from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {Link,BrowserRouter} from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(
      toggleMenu()
    )
  }
  return (
    <div className="sticky top-0 z-50 grid grid-flow-col p-1 bg-white">
      <div className="flex col-span-1">
        <img src={HAM_ICON} alt="hamburger-logo" className="h-8 mt-3 mb-3 ml-3 p-1 cursor-pointer" onClick={toggleMenuHandler}></img>
        <BrowserRouter>
        <Link to={"/"}>
        <img src={YT_LOGO} alt="yt-logo" className="h-8 mt-3 mb-3 ml-2 p-1 cursor-pointer"></img>
        </Link>
        </BrowserRouter>
      </div>
      <div className="flex col-span-10 justify-center items-center">
        <input type="text" placeholder="Search" className="h-8 w-6/12 mt-3 mb-3 p-2 rounded-l-full border-1 border-r-0 border-gray-500"></input>
        <button className="h-8 w-20 mt-3 mb-3 border-gray-500 border-1 rounded-r-full cursor-pointer">
            {/* <img src={SEARCH_LOGO} className="w-full h-full rounded-r-full"></img> */}
            Search
        </button>
      </div> 
      <div className="flex col-span-1">
        <img src={USER_ICON} className="h-8 m-3 p-1 cursor-pointer"></img>
      </div>
    </div>
  );
};
export default Header;
