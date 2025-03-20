import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.jsx";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";
import SearchResult from "./components/SearchResult.jsx";

const appRouter=createBrowserRouter([
  {
    path : "/",
    element : <Body/>,
    children:[
      {
        path : "/",
        element : <MainContainer/>
      },
      {
        path : "/watch",
        element : <WatchPage/>
      },
      {
        path:"/search",
        element : <SearchResult/>
      }
    ]
  }
])

function App() {
  return (
    <div>

    <Provider store={store}>
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
      <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
