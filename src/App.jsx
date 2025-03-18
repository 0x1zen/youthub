import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";
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
      }
    ]
  }
])

function App() {
  return (
    <div>
    <Provider store={store}>
      <Header/>
      <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
