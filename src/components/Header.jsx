import { HAM_ICON, YT_LOGO, USER_ICON, SEARCH_LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search)

  useEffect(() => {
    // const timer = setTimeout(() => search(), 300);

    if(searchCache[input]){
      setSuggestions(searchCache[input]);
    }
    else{
      const timer = setTimeout(() => search(), 300);
    }

    return () => {
      clearInterval(timer);
    }
    // Make an api call for every key press
    // But if the difference between each key press is less than 200ms decline the api call.
  }, [input]);

  const search = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + input);
    const data = await response.json();
    setSuggestions(data[1]);
  }

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
        <Link to={"/"}>
          <img src={YT_LOGO} alt="yt-logo" className="h-8 mt-3 mb-3 ml-2 p-1 cursor-pointer"></img>
        </Link>
      </div>
      <div className="flex flex-col col-span-10 justify-center items-center relative">
        <div className="flex w-150">
          <input type="text" placeholder="Search" className="h-8 w-6/12 mt-3 mb-3 p-2 rounded-l-full border-1 border-r-0 border-gray-500" value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)}></input>
          <button className="h-8 w-20 mt-3 mb-3 border-gray-500 border-1 rounded-r-full cursor-pointer">
            <img src={SEARCH_LOGO} className="w-full h-full rounded-r-full"></img>
            {/* Search */}
          </button>
        </div>
        <div className="absolute z-1 bg-white top-11 left-45 w-75 rounded-xl shadow-xl border-gray-200">
          <ul className="">
            {showSuggestions && suggestions.map((item) => {
              return (
                <Link to={"/search"}>
                  <div className="flex hover:bg-gray-300">
                    <img className="w-5 h-5 mt-3" src={SEARCH_LOGO}></img>
                    <li className="cursor-pointer py-2 px-5 " >{item}</li>
                  </div>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="flex col-span-1">
        <img src={USER_ICON} className="h-8 m-3 p-1 cursor-pointer"></img>
      </div>
    </div>
  );
};
export default Header;
