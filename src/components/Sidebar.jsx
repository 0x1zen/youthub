import { useSelector } from "react-redux";
import { FaHome, FaMusic, FaFilm, FaGamepad, FaListUl } from "react-icons/fa";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return isMenuOpen ? (
    <div className="col-span-1 shadow-lg flex flex-col h-screen">
      <h1 className="text-3xl mb-4 flex items-center">
        <FaHome className="mr-2" />
        Home
      </h1>
      <h1 className="text-3xl mb-4 flex items-center">
        <FaListUl className="mr-2" />
        Shorts
      </h1>
      <h1 className="text-3xl mb-4 flex items-center">
        <FaListUl className="mr-2" />
        Subscriptions
      </h1>
      <ul className="space-y-2">
        <li className="flex items-center">
          <FaMusic className="mr-2" />
          Music
        </li>
        <li className="flex items-center">
          <FaGamepad className="mr-2" />
          Sports
        </li>
        <li className="flex items-center">
          <FaGamepad className="mr-2" />
          Gaming
        </li>
        <li className="flex items-center">
          <FaFilm className="mr-2" />
          Movies
        </li>
      </ul>
    </div>
  ) : (
    <div className="col-span-1 shadow-lg flex flex-col items-center h-screen">
      <FaHome className="text-3xl mb-4" />
      <FaListUl className="text-3xl mb-4" />
      <FaListUl className="text-3xl mb-4" />
      <ul className="space-y-2">
        <li>
          <FaMusic className="text-3xl" />
        </li>
        <li>
          <FaGamepad className="text-3xl" />
        </li>
        <li>
          <FaGamepad className="text-3xl" />
        </li>
        <li>
          <FaFilm className="text-3xl" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
